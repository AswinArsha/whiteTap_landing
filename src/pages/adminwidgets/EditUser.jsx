// EditUser.jsx
import React, { useState, useEffect } from 'react';

function EditUser({
  users, // List of users to select from
  handleEditUser, // Function to handle editing
  setSelectedUserForEdit, // Function to set the selected user
  selectedUserForEdit, // The user currently being edited
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    designation: '',
    phone: '',
    website: '',
    whatsapp: '',
    facebook: '',
    instagram: '',
    youtube: '',
    linkedin: '',
    google_reviews: '',
    paytm: '',
    maps: '',
    card_background_image: '',
    avatar: '',
    background_image: '',
  });

  // Update the form data when the selected user changes
  useEffect(() => {
    if (selectedUserForEdit) {
      setFormData(selectedUserForEdit);
    }
  }, [selectedUserForEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser(formData);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Edit User</h3>

      {/* Dropdown to select a user to edit */}
      <select
        value={selectedUserForEdit ? selectedUserForEdit.id : ''}
        onChange={(e) => {
          const selectedUser = users.find(
            (user) => user.id === parseInt(e.target.value)
          );
          setSelectedUserForEdit(selectedUser);
        }}
        className="border rounded px-3 py-2 w-full mb-4"
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {/* Edit form */}
      {selectedUserForEdit && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          {/* Input fields */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="facebook"
            placeholder="Facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="instagram"
            placeholder="Instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="youtube"
            placeholder="YouTube"
            value={formData.youtube}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            value={formData.linkedin}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="google_reviews"
            placeholder="Google Reviews"
            value={formData.google_reviews}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="paytm"
            placeholder="Paytm"
            value={formData.paytm}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="maps"
            placeholder="Maps"
            value={formData.maps}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="card_background_image"
            placeholder="Card Background Image"
            value={formData.card_background_image}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="avatar"
            placeholder="Avatar"
            value={formData.avatar}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <input
            type="text"
            name="background_image"
            placeholder="Background Image"
            value={formData.background_image}
            onChange={handleChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default EditUser;
