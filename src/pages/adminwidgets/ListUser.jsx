import React from "react";

function ListUser({ users, handleDeleteUser }) {
  return (
    <div>
      <h4 className="text-md font-bold mb-2">Current Users:</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex items-center mb-2">
            <div className="mr-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div>
              <p>{user.name}</p>
              <p className="text-gray-500">{user.designation}</p>
            </div>
            <button
              className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUser;
