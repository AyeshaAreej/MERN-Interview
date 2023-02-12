import React from "react";

const TextField = ({ value, onChange, placeholder }) => {
  return (
    <div className={`bg-[#FFF] text-darkblue p-2 px-4 rounded-full `}>
      <input
        className="outline-none w-[100%]"
        type="text"
        name=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id=""
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
