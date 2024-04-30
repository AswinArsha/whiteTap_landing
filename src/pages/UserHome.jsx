//  src\pages\UserHome.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import supabase from "../supabase";

function UserHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const signedInUserEmail = location.state?.signedInUserEmail;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFormData, setEditedFormData] = useState(userData);

  const toggleEditing = () => setIsEditing(!isEditing);

  const handleViewCard = () => {
    const userId = userData.id;
    const url = `https://main.d29jfubysskuax.amplifyapp.com/${userId}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (signedInUserEmail) {
          const { data, error } = await supabase
            .from("social_media_data")
            .select("*")
            .eq("email", signedInUserEmail)
            .single();

          if (error) {
            setError("Error fetching user data");
          } else if (data) {
            setUserData(data);
            setEditedFormData(data);
          } else {
            setError("No user data found");
          }
        } else {
          setError("User not signed in");
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [signedInUserEmail]);

  const handleSaveChanges = async () => {
    try {
      const { error } = await supabase
        .from("social_media_data")
        .update(editedFormData)
        .eq("email", signedInUserEmail);

      if (error) {
        console.error("Error updating user data:", error.message);
      } else {
        setUserData(editedFormData);
        setIsEditing(false);
        console.log("User data updated successfully");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
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
        {error}
      </div>
    );
  }

  if (!userData) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">User Home</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mt-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleEditing}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
            {isEditing && (
              <button
                onClick={handleSaveChanges}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Save
              </button>
            )}
            <button
              onClick={handleViewCard}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              View Card
            </button>
          </div>
          <h3 className="text-lg font-bold mb-2">Your Details:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                Name:{" "}
                <input
                  type="text"
                  value={isEditing ? editedFormData.name : userData.name}
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      name: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Designation:{" "}
                <input
                  type="text"
                  value={
                    isEditing
                      ? editedFormData.designation
                      : userData.designation
                  }
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      designation: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Phone:{" "}
                <input
                  type="text"
                  value={isEditing ? editedFormData.phone : userData.phone}
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      phone: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                WhatsApp:{" "}
                <input
                  type="text"
                  value={
                    isEditing ? editedFormData.whatsapp : userData.whatsapp
                  }
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      whatsapp: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Website:{" "}
                <input
                  type="text"
                  value={isEditing ? editedFormData.website : userData.website}
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      website: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
            </div>
            <div>
              <p>
                Facebook:{" "}
                <input
                  type="text"
                  value={
                    isEditing ? editedFormData.facebook : userData.facebook
                  }
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      facebook: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Instagram:{" "}
                <input
                  type="text"
                  value={
                    isEditing ? editedFormData.instagram : userData.instagram
                  }
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      instagram: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                YouTube:{" "}
                <input
                  type="text"
                  value={isEditing ? editedFormData.youtube : userData.youtube}
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      youtube: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                LinkedIn:{" "}
                <input
                  type="text"
                  value={
                    isEditing ? editedFormData.linkedin : userData.linkedin
                  }
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      linkedin: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Google Reviews:{" "}
                <input
                  type="text"
                  value={
                    isEditing
                      ? editedFormData.google_reviews
                      : userData.google_reviews
                  }
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      google_reviews: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Paytm:{" "}
                <input
                  type="text"
                  value={isEditing ? editedFormData.paytm : userData.paytm}
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      paytm: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Email:{" "}
                <input
                  type="text"
                  value={isEditing ? editedFormData.email : userData.email}
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      email: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
              <p>
                Maps:{" "}
                <input
                  type="text"
                  value={isEditing ? editedFormData.maps : userData.maps}
                  onChange={(e) =>
                    setEditedFormData({
                      ...editedFormData,
                      maps: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserHome;
