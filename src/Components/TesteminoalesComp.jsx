import React from "react";
import Stars from "../assets/stars.svg";
import Boy from "../assets/boy.png";
import { FaChevronRight } from "react-icons/fa";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const TesteminoalesComp = () => {
  return (
    <div>
      <div className="py-[100px]">
        <span className="text-black font-semibold text-3xl">Testimonials</span>
      </div>
      <div className="flex gap-[350px] items-center">
        <div>
          <img src={Stars} alt="Stars" />
          <p className=" py-8 w-[350px] h-[144px]">
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
            ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet
            turpis nec”
          </p>
          <div className="py-[40px]">
            <span className="font-bold my-[30px]">Edward Newgate</span>
            <p>Founder Circle</p>
          </div>
        </div>
        <img src={Boy} alt="Boy image " />
      </div>
      <div className="py-[60px] ">
        <div className="flex gap-[810px] ">
          <span className=" text-3xl text-gray-900 font-bold">
            Trending stories
          </span>
          <button className="text-orange-400 flex gap-4 items-center">
            View all <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="flex gap-7">
        <img src={img1} alt="Card" />
        <img src={img2} alt="Card" />
        <img src={img3} alt="Card" />
        <img src={img4} alt="Card" />
      </div>
    </div>
  );
};

export default TesteminoalesComp;
