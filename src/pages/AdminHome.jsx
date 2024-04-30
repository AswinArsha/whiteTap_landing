import React, { useState, useEffect } from "react";
import supabase from "../supabase";
import AddUser from "./adminwidgets/AddUser";
import EditUser from "./adminwidgets/EditUser";
import ListUser from "./adminwidgets/ListUser";
import ViewUserQR from "./adminwidgets/ViewUserQR";
import ViewUserInsights from "./adminwidgets/ViewUserInsights"; // Import the new component

function AdminHome() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState(null);
  const [isViewQRModalOpen, setIsViewQRModalOpen] = useState(false);
  const [selectedUserIdForQR, setSelectedUserIdForQR] = useState(null);
  const [isViewUserInsightsOpen, setIsViewUserInsightsOpen] = useState(false); // New state
  const [selectedUserIdForInsights, setSelectedUserIdForInsights] =
    useState(null); // New state for selected user insights

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase
          .from("social_media_data")
          .select("*");
        if (error) {
          setError("Error fetching users");
        } else {
          setUsers(data);
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    // Realtime listener for updates in the "social_media_data" table
    const subscription = supabase
      .channel("realtime:public:social_media_data")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "social_media_data" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setUsers((prevUsers) => [...prevUsers, payload.new]);
          } else if (payload.eventType === "UPDATE") {
            setUsers(
              prevUsers.map((user) =>
                user.id === payload.new.id ? payload.new : user
              )
            );
          } else if (payload.eventType === "DELETE") {
            setUsers((prevUsers) =>
              prevUsers.filter((user) => user.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAddUser = async (newUser) => {
    try {
      const { error } = await supabase
        .from("social_media_data")
        .insert([newUser]);
      if (error) {
        setError("Error adding user");
      } else {
        setIsAddUserModalOpen(false); // Close the add modal on success
      }
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const handleEditUser = async (updatedUserData) => {
    try {
      const { error } = await supabase
        .from("social_media_data")
        .update(updatedUserData)
        .eq("id", selectedUserForEdit.id);
      if (error) {
        setError("Error updating user");
      } else {
        setIsEditUserModalOpen(false);
        setSelectedUserForEdit(null);
      }
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const { error } = await supabase
        .from("social_media_data")
        .delete()
        .eq("id", userId);
      if (error) {
        setError("Error deleting user");
      } else {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      }
    } catch (err) {
      console.error("An error occurred. Please try again.");
    }
  };

  const handleViewQR = (userId) => {
    setSelectedUserIdForQR(userId);
    setIsViewQRModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Admin Home</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold">User Management</h2>

        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsAddUserModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <AddUser
          isOpen={isAddUserModalOpen}
          setIsOpen={setIsAddUserModalOpen}
          handleAddUser={handleAddUser}
        />

        {isEditUserModalOpen && (
          <EditUser
            isOpen={isEditUserModalOpen}
            setIsOpen={setIsEditUserModalOpen}
            users={users}
            handleEditUser={handleEditUser}
            selectedUserForEdit={selectedUserForEdit}
            setSelectedUserForEdit={setSelectedUserForEdit}
          />
        )}

        <ViewUserQR
          isOpen={isViewQRModalOpen}
          setIsOpen={setIsViewQRModalOpen}
          userId={selectedUserIdForQR}
        />

        <ViewUserInsights
          isOpen={isViewUserInsightsOpen}
          setIsOpen={setIsViewUserInsightsOpen}
          userId={selectedUserIdForInsights} // Pass the selected user ID
        />

        <ListUser
          users={users}
          handleDeleteUser={handleDeleteUser}
          handleViewQR={handleViewQR}
          setSelectedUserForEdit={setSelectedUserForEdit}
          setIsEditUserModalOpen={setIsEditUserModalOpen}
          setIsViewUserInsightsOpen={setIsViewUserInsightsOpen}
          setSelectedUserIdForInsights={setSelectedUserIdForInsights}
        />
      </main>
    </div>
  );
}

export default AdminHome;
