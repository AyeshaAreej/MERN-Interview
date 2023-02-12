import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // logout handler function
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="container bg-white">
      <div className="flex justify-center items-center h-screen flex-col pt-36 ">
        <div className="px-2 md:px-56 bg-lightBlue">
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details.
            </span>
          </div>

          <form className="py-1">
            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex gap-10">
                <input type="text" placeholder="UserName" />
                <input type="text" placeholder="Email*" />
              </div>

              <div className="name flex gap-10">
                <input type="text" placeholder="Mobile No." />
                <input type="text" placeholder="Address" />
              </div>

              <textarea placeholder="About"/>  
              <button type="submit">Update</button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                come back later?{" "}
                <button onClick={userLogout} className="text-red-500" to="/">
                  Logout
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
