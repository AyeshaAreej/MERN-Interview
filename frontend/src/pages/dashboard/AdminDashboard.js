import React, { useState } from "react";
import AllUsers from "./AllUsers";
import DashboardHome from "./DashboardHome";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 p-6">
        <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
      </nav>
      <div className="flex flex-col lg:flex-row ">
        <div className="bg-gray-900 w-full lg:w-64 lg:fixed lg:h-screen p-6">
          <h2 className="text-white text-lg font-medium">Menu</h2>
          <ul className="mt-6">
            <li className="mt-2">
              <button
                onClick={() => setCurrentPage("dashboard")}
                className={`block text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700 ${
                  currentPage === "dashboard" ? "bg-gray-700" : "bg-transparent"
                }`}
              >
                Dashboard
              </button>
            </li>
            <li className="mt-2">
              <button
                onClick={() => setCurrentPage("allUsers")}
                className={`block text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700 ${
                  currentPage === "allUsers" ? "bg-gray-700" : "bg-transparent"
                }`}
              >
                All Users
              </button>
            </li>
          </ul>
        </div>
        <main className="flex-1 bg-gray-100 p-6">
          {currentPage === "dashboard" ? <DashboardHome /> : <AllUsers />}
        </main>
      </div>
      {/* <footer className="bg-gray-800 p-6">
        <p className="text-white text-center">&copy; 2023 Admin Dashboard</p>
      </footer> */}
    </div>
  );
};

export default AdminDashboard;
