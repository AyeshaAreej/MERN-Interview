import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const DashboardHome = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="flex flex-wrap justify-center items-center pl-0 lg:pl-64">
      <div className="w-full md:w-1/2 xl:w-1/3 p-3" data-aos="fade-right">
        <div className="bg-gray-800 p-3 rounded-lg">
          <h2 className="text-white text-lg font-medium">All Users</h2>
          <p className="text-white">100</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-3" data-aos="fade-left">
        <div className="bg-gray-800 p-3 rounded-lg">
          <h2 className="text-white text-lg font-medium">Profit</h2>
          <p className="text-white">$10,000</p>
        </div>
      </div>
    </div>
  );
};
export default DashboardHome;
