import React from "react";
import Logo from "../assets/logo.svg";

const HeaderBottomComp = () => {
  return (
    <div className="flex  gap-[515px] py-4 ">
      <img src={Logo} alt="Site Logo" />
      <nav className="flex gap-6">
        <ul className="flex gap-4 my-4">
          <li>
            <a
              href="#"
              className=" text-gray-400 font-normal hover:text-black p-3 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-400 font-normal hover:text-black p-3 "
            >
              Destinations
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-400 font-normal hover:text-black p-3 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-400 font-normal hover:text-black p-3 "
            >
              Partner
            </a>
          </li>
        </ul>
        <div className="flex  gap-3">
          <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-100 px-4  text-center rounded-lg">
            Sign Up
          </button>
          <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-100  px-4   rounded-lg">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottomComp;
