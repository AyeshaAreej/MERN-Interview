import React from "react";
import { headerData } from "../data/headerData";
import Button from "./Button";
import HeaderItem from "./HeaderItem";
import TextField from "./TextField";
import footerData from "../data/footerData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid flex flex-col-reverse md:grid md:grid-cols-3 md:space-x-10 bg-darkblue text-[#FFF] px-20 pb-10">
        <div className="col-span-1 mt-20 space-y-10">
          <a href="/">
            <p className="h-14">Logo</p>
          </a>

         
          <d className="flex flex-row space-x-4">
            <a href={footerData.linkedInUrl}>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                className="w-[30px] h-[30px]  rounded-[50%]  text-center text-[20px] mr-[1px] text-lightGreen cursor-pointer"
              />
            </a>
            <a href={footerData.githubUrl}>
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                className="w-[30px] h-[30px] rounded-[50%] text-center text-[20px] text-lightGreen bg-transparent mr-[5px] cursor-pointer"
              />
            </a>
            <a href={footerData.fbUrl}>
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="w-[30px] h-[30px] rounded-[50%] text-center text-[20px] text-lightGreen bg-transparent mr-[5px] cursor-pointer"
              />
            </a>
            <a href={footerData.instaUrl}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="w-[30px] h-[30px] rounded-[50%] text-center text-[20px] text-lightGreen bg-transparent m5-[15px] cursor-pointer"
              />
            </a>
          </d>
          <div className="text-xs ">
            © All rights reserved – 2023
          </div>
        </div>
        <div className="col-span-1 mt-20 md:space-y-10">
          <h4 className="text-xl font-bold">Links</h4>
          <ul className="space-y-3">
            {headerData.map((item) => {
              return (
                <HeaderItem key={item.id} title={item.title} url={item.url} />
              );
            })}
          </ul>
        </div>

       
        <div className="col-span-1 mt-20 md:space-y-10 ">
          <h4 className="text-xl font-bold mb-6">Join Newsletter</h4>
          <div className="mb-6">
            <TextField placeholder="Enter your email" />
          </div>
          <Button text={"Subscribe"} />
        </div>
      </div>
    </>
  );
};

export default Footer;
