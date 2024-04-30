// src/pages/userwidgets/UserEditFormComponent.jsx
import React from "react";

const UserEditFormComponent = ({ editedFormData, setEditedFormData, isEditing }) => (
  <div className="mt-8">
    <h3 className="text-lg font-bold mb-2">Edit Your Details:</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p>
          Name:
          <input
            type="text"
            value={editedFormData.name}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                name: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Designation:
          <input
            type="text"
            value={editedFormData.designation}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                designation: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Phone:
          <input
            type="text"
            value={editedFormData.phone}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                phone: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          WhatsApp:
          <input
            type="text"
            value={editedFormData.whatsapp}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                whatsapp: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Website:
          <input
            type="text"
            value={editedFormData.website}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                website: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Drive Link:
          <input
            type="text"
            value={editedFormData.drive_link}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                drive_link: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
      </div>
      <div>
        <p>
          Facebook:
          <input
            type="text"
            value={editedFormData.facebook}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                facebook: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Instagram:
          <input
            type="text"
            value={editedFormData.instagram}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                instagram: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          YouTube:
          <input
            type="text"
            value={editedFormData.youtube}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                youtube: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          LinkedIn:
          <input
            type="text"
            value={editedFormData.linkedin}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                linkedin: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Google Reviews:
          <input
            type="text"
            value={editedFormData.google_reviews}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                google_reviews: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Email:
          <input
            type="text"
            value={editedFormData.email}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                email: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Maps:
          <input
            type="text"
            value={editedFormData.maps}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                maps: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Background Image:
          <input
            type="text"
            value={editedFormData.background_image}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                background_image: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Card Background Image:
          <input
            type="text"
            value={editedFormData.card_background_image}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                card_background_image: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
        <p>
          Avatar:
          <input
            type="text"
            value={editedFormData.avatar}
            onChange={(e) =>
              setEditedFormData({
                ...editedFormData,
                avatar: e.target.value,
              })
            }
            disabled={!isEditing}
            className="border rounded px-2 py-1 w-full"
          />
        </p>
      </div>
    </div>
  </div>
);

export default UserEditFormComponent;
