// src/pages/userwidgets/UserProfileComponent.jsx
import React from "react";

const UserProfileComponent = ({ userData }) => (
  <div className="mt-8">
    <h3 className="text-lg font-bold mb-2">Your Details:</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p>Name: {userData.name}</p>
        <p>Designation: {userData.designation}</p>
        <p>Phone: {userData.phone}</p>
        <p>WhatsApp: {userData.whatsapp}</p>
        <p>Website: {userData.website}</p>
        <p>Drive Link: {userData.drive_link}</p>
      </div>
      <div>
        <p>Facebook: {userData.facebook}</p>
        <p>Instagram: {userData.instagram}</p>
        <p>YouTube: {userData.youtube}</p>
        <p>LinkedIn: {userData.linkedin}</p>
        <p>Google Reviews: {userData.google_reviews}</p>
        <p>Paytm: {userData.paytm}</p>
        <p>Email: {userData.email}</p>
        <p>Maps: {userData.maps}</p>
      </div>
    </div>
  </div>
);

export default UserProfileComponent;
