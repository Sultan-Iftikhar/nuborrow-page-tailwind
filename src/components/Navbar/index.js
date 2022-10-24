import React from "react";
import logo from "../../images/png/logo.png";
import navitem from "../../images/png/navitem.png";
function index() {
  return (
    <>
      <header className="text-gray-400 bg-[#ffffff] body-font">
        <div className="container mx-auto flex justify-between p-5 md:flex-row items-center">
          <div className="flex title-font font-medium items-center  mb-4 md:mb-0">
            <img src={logo} className="h-20" />
          </div>
          <div className="title-font font-medium items-center  mb-4 md:mb-0">
            <img src={navitem} className="h-20" />
          </div>
        </div>
      </header>
    </>
  );
}

export default index;
