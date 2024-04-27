import React from "react";
import Logo from "../assets/logo.svg";
import line from "../assets/lineFooter.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import YouTube from "../assets/YouTube.png";

const FooterComp = () => {
  return (
    <div className="py-[200px]">
      <div className="bg-slate-200  ">
        <div className="container  h-[582px] mx-auto  px-[50px]">
          <div className="flex gap-[100px] ">
            <div className="my-[78px] flex gap-[170px]">
              <div>
                <img src={Logo} alt="Logo image" />
                <p className="my-12 text-gray-500">
                  Plan and book your perfect trip <br /> with expert advice,
                  travel tips destination information from us
                </p>
                <p className=" text-gray-500 my-[54px]">
                  ©2020 Thousand Sunny. All rights reserved
                </p>
              </div>
              <div>
                <span className="font-bold">Destinations</span>
                <ul className="py-[57px]">
                  <li className="text-gray-500 my-3">
                    <a href="#">Africa</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Antarctica</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Asia</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Europe</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">America</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-[54px]">
              <div className="my-[78px]">
                <span className="font-bold my-2">Shop</span>
                <ul className="py-[57px]">
                  <li className="text-gray-500 my-3">
                    <a href="#">Destination Guides</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Pictorial & Gifts</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Special Offers</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Delivery Times</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="my-[78px]">
                <span className="font-bold my-2">Interests</span>
                <ul className="py-[54px]">
                  <li className="text-gray-500 my-3">
                    <a href="#">Adventure Travel</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Art And Culture</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Wildlife And Nature</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Family Holidays</a>
                  </li>
                  <li className="text-gray-500 my-3">
                    <a href="#">Food And Drink</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={line} alt="Line" />
          </div>
          <div className="flex gap-5 my-5 items-center justify-center">
            <a href="twitter.com">
              <img src={Twitter} alt="Twitter icon" />
            </a>
            <a href="facebook.com">
              <img src={Facebook} alt="Facebook icon" />
            </a>
            <a href="instagram.com">
              <img src={Instagram} alt="Instagram icon" />
            </a>
            <a href="linkedin.com">
              <img src={Linkedin} alt="Linkedin icon" />
            </a>
            <a href="youtube.com  ">
              <img src={YouTube} alt="YouTube icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
