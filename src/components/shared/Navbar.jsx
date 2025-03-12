import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-Navbar text-white py-4 w-full">
      <div className="center grid grid-cols-1 md:grid-cols-3">
        {/* logo */}
        <div>
          <h1>Numan</h1>
        </div>
        {/* navlinks */}
        <div className="flex gap-4 items-center">
          <NavLink
            className={
              "px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            className={
              "px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            About
          </NavLink>
          <NavLink
            className={
              "px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            Projects
          </NavLink>
          <NavLink
            className={
              "px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* social links */}
        <div className="flex gap-4 items-center justify-end text-md">
          <div className="p-3 rounded-full bg-[#1e1e1e] cursor-pointer">
            <FaFacebookF />
          </div>

          <div className="p-3 rounded-full bg-[#1e1e1e] cursor-pointer">
            <FaInstagram />
          </div>

          <div className="p-3 rounded-full bg-[#1e1e1e] cursor-pointer">
            <FaLinkedinIn />
          </div>

          <div className="p-3 rounded-full bg-Primary cursor-pointer">
            <MdOutlineMenuOpen />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
