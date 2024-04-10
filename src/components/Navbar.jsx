import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import { RiShoppingCartLine } from "react-icons/ri";
import { PiNumberCircleOneBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Left content */}
      <div className="text-white">LOTRADE</div>

      {/* Right content */}
      <div className="flex items-center">
        {/* Cart */}
        <div className="flex flex-row text-white mr-4">
          <h6>Cart</h6>
          <RiShoppingCartLine size={24} />
          <PiNumberCircleOneBold />
        </div>

        {/* Dropdown */}
        <div className="relative">
          <div className="text-white cursor-pointer">
            <IoIosArrowDropdown size={24} />
          </div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
