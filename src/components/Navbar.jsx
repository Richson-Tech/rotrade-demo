import React from "react";
import Menu from "./Menu";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdExposureZero } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Left content */}
      <div className="text-white font-[Actor]">LOTRADE</div>

      {/* Right content */}
      <div className="flex items-center">
        {/* Cart */}
        <div className="flex flex-row text-white mr-4">
          <h6>Cart</h6>
          <RiShoppingCartLine size={24} />
          <MdExposureZero />
        </div>

        {/* Dropdown */}
        <div>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
