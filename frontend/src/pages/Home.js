import React from "react";
import BgImage from "../assets/image1.jpg";
import Button from "../common/components/Button";

export const Home = () => {
  return (
    <div className="w-[100%] bg-gray-300 pb-28 pt-36">
      <div className="flex justify-center items-center">
        <div className=" flex flex-col-reverse md:flex-row ">
          <div class=" left flex flex-col justify-center items-center  py-12">
            <h1 class="text-2xl font-medium md:text-4xl mx-5">Welcome</h1>
            <p class="w-4/4 mx-5 mt-3 text-center md:text-left pb-5">
              Everything you need to achieve more in less time
            </p>
            <Button text={"Learn More"} />
          </div>
          <div class="right flex justify-center items-center">
            <img src={BgImage} alt="laptop" />
          </div>
        </div>
      </div>
    </div>
  );
};
