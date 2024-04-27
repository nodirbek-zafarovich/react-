import React from "react";
import HeaderInputComp from "../Components/HeaderInputComp";
import HeaderBottomComp from "../Components/HeaderBottomComp";

const Header = () => {
  return (
    <div className="container mx-auto  px-[50px] ">
      <HeaderBottomComp />
      <HeaderInputComp />
    </div>
  );
};

export default Header;
