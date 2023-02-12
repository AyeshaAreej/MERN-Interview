import React from "react";

const TextArea = ({ value, onChange, placeholder }) => {
  return (
    <div className={`bg-[#FFF] p-2 px-4 rounded-xl`}>
      <textarea
        className="outline-none resize-none bg-transparent w-[100%]"
        type="text"
        name=""
        cols={70}
        rows={10}
        maxLength={200}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id=""
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
