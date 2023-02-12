import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <a
        onClick={onClick}
        className="py-4 px-6 hover:bg-lightGreen bg-green rounded-full text-[#FFF] cursor-pointer font-bold"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
