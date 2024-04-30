import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import supabase from '../supabase';
import AddUser from './adminwidgets/AddUser';
import EditUser from './adminwidgets/EditUser';
import ListUser from './adminwidgets/ListUser';

function AdminHome() {
  const location = useLocation();
  const signedInUserEmail = location.state?.signedInUserEmail;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase.from('social_media_data').select('*');
        if (error) {
          setError('Error fetching users');
        } else {
          setUsers(data);
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); // Fetch all users when the component mounts

    // Realtime listener for updates in the "social_media_data" table
    const subscription = supabase
      .channel('realtime:public:social_media_data') // Channel name for real-time updates
      .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'social_media_data' }, 
        (payload) => {
          // Handle changes based on the event type
          if (payload.eventType === 'INSERT') {
            setUsers((prevUsers) => [...prevUsers, payload.new]); // Add new user to the list
          } else if (payload.eventType === 'UPDATE') {
            setUsers((prevUsers) =>
              prevUsers.map((user) => (user.id === payload.new.id ? payload.new : user))
            ); // Update the changed user
          } else if (payload.eventType === 'DELETE') {
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== payload.old.id)); // Remove the deleted user
          }
        }
      )
      .subscribe(); // Subscribe to the channel

    return () => {
      subscription.unsubscribe(); // Clean up the subscription on component unmount
    };
  }, []); // Empty dependency array to run the effect only once

  const handleAddUser = async (newUser) => {
    try {
      const { error, data } = await supabase.from('social_media_data').insert([newUser]);
      if (error) {
        setError('Error adding user');
      } else {
        const newUserData = data[0]; // Use the first item from the returned data
        setUsers((prevUsers) => [...prevUsers, newUserData]); // This is optional with real-time setup
        setIsAddUserModalOpen(false); // Close the AddUser modal
      }
    } catch (err) {
      setError('An error occurred while adding the user. Please try again.');
    }
  };

  const handleEditUser = async (updatedUserData) => {
    try {
      const { error } = await supabase.from('social_media_data').update(updatedUserData).eq('id', selectedUserForEdit.id);

      if (error) {
        setError('Error updating user');
      } else {
        setIsEditUserModalOpen(false); // Close the EditUser modal
        setSelectedUserForEdit(null); // Clear the selected user
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const { error } = await supabase.from('social_media_data').delete().eq('id', userId);

      if (error) {
        setError('Error deleting user');
      } else {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // This is optional with real-time setup
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
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
        {error} {/* Display error message */}
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

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsEditUserModalOpen(true)}
          >
            Edit User
          </button>
        </div>

        <AddUser
          isOpen={isAddUserModalOpen}
          setIsOpen={setIsAddUserModalOpen}
          handleAddUser={handleAddUser}
        />

        {isEditUserModalOpen && (
          <EditUser
            users={users}
            handleEditUser={handleEditUser}
            setSelectedUserForEdit={setSelectedUserForEdit}
            selectedUserForEdit={selectedUserForEdit}
          />
        )}

        <ListUser users={users} handleDeleteUser={handleDeleteUser} />
      </main>
    </div>
  );
}

export default AdminHome;
