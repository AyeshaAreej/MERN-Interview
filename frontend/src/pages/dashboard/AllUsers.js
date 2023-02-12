import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DeleteUser from "./DeleteUser";
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/allUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="flex justify-center items-center pl-0 lg:pl-64">
      <table className="table-auto mt-6 w-full " data-aos="fade-in">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <DeleteUser id={user._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllUsers;
