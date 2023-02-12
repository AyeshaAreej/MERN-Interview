import React, { useState } from "react";

const DeleteUser = ({ id }) => {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8000/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        className="bg-darkblue text-white px-1 py-1 rounded-sm"
        onClick={handleDelete}
      >
        Delete
      </button>
      {message && <p>{message}</p>}
    </>
  );
};

export default DeleteUser;
