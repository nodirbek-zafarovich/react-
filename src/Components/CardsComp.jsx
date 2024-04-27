import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import { FaChevronRight } from "react-icons/fa";
import Man from "../assets/man3.png"
const CardsComp = () => {
  return (
    <div>
      <div className="flex gap-[690px] py-[40px]">
        <span className="text-3xl font-semibold text-gray-900">
          Featured destinations
        </span>
        <button className=" font-semibold text-xl flex gap-4 text-center items-center text-orange-400">
          View all <FaChevronRight />
        </button>
      </div>
      <div className="flex gap-6">
        <img src={card1} alt=" card image " />
        <img src={card2} alt=" card image " />
        <img src={card3} alt=" card image " />
        <img src={card4} alt=" card image " />
      </div>
      <div>
        <div className=" flex gap-[220px]  items-center py-[213px] ">
          <div>
            <span className="font-semibold text-3xl">
              Guides by Thousand <br /> Sunny
            </span>
            <p className="my-5 w-[350px] h-[112px] text-gray-500 ">
              Packed with tips and advice from our on-the-ground experts, our
              city guides app (iOS and Android) is the ultimate resource before
              and during a trip.
            </p>
            <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white w-[164px] h-[60px] rounded-xl">
              Download
            </button>
          </div>
          <img src={Man} alt="Man img" />
        </div>
      </div>
    </div>
  );
};

export default CardsComp;
