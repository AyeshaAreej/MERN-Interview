import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { headerData } from "../data/headerData";
import HeaderItem from "./HeaderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <div className=" flex  justify-between  items-center bg-darkblue text-[#FFF] w-full fixed  z-50 top-0 left-0  ">
        <p
          className="h-14 py-3 pl-7 md:pl-10 lg:pl-20 "
          onClick={handleLogoClick}
        >
          Logo
        </p>
        <ul className="hidden md:flex pr-7 md:pr-10 lg:pr-20 leading-[80px] space-x-1 lg:space-x-2 uppercase rounded">
          {headerData.map((item) => {
            return (
              <HeaderItem key={item.id} title={item.title} url={item.url} />
            );
          })}
        </ul>

        <input type="checkbox" id="check" hidden onClick={handleToggle} />
        <label
          for="check"
          class="relative float-right text-white text-3xl leading-[80px] pr-7 md:hidden cursor-pointer"
        >
          <li className="list-none">
            <FontAwesomeIcon icon={faBars} color={"#419D78"} />
          </li>
        </label>
      </div>
      {/* for mobile */}
      <ul
        className={
          navbarOpen
            ? "z-50 top-0 left-0 text-white flex-col flex items-center fixed inset-0 uppercase  bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
            : "hidden"
        }
      >
        <input type="checkbox" id="check" hidden onClick={handleToggle} />
        <label
          for="check"
          class="relative float-right text-white text-3xl leading-[80px]  cursor-pointer"
        >
          <li className="list-none">
            <FontAwesomeIcon icon={faXmark} color={"#419D78"} />
          </li>
        </label>
        {headerData.map((item) => {
          return <HeaderItem key={item.id} title={item.title} url={item.url} />;
        })}
      </ul>
    </>
  );
};

export default Header;
