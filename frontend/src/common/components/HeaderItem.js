import React from "react";
import { useNavigate } from "react-router";

const HeaderItem = ({ title, url }) => {
  const navigate = useNavigate();
  const handleCLick = (e) => {
    e.stopPropagation();
    navigate(url);
  };
  return (
    <li
      className="rounded p-[10px] cursor-pointer  "
      onClick={handleCLick}
      href={url}
    >
      {title}
    </li>
  );
};

export default HeaderItem;
