import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white/20 backdrop-blur-3xl  lg:bg-transparent lg:backdrop-blur-2xl text-white py-2 lg:py-4 w-11/12 mx-auto mt-4 lg:mt-0 rounded-full lg:rounded-none  px-4 md:px-2 lg:px-0  lg:w-full sticky top-4 lg:top-0 left-0 z-50">
      <div className="center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* logo */}
        <div className="self-center hidden lg:block">
          <h1>Numan</h1>
        </div>
        {/* navlinks */}
        <div className="flex justify-between  gap-4 items-center md:justify-center navLinks">
          <a
            href={"#header"}
            className={
              "md:px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            Home
          </a>
          <a
            href={"#about"}
            className={
              "md:px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            About
          </a>
          <a
            href={"#projects"}
            className={
              "md:px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            Projects
          </a>
          <a
            href={"#contact"}
            className={
              "md:px-4 py-1 hover:bg-pink-600/10 hover:text-[#ff014f] transition-colors duration-600 font-medium"
            }
          >
            Contact
          </a>
        </div>

        {/* social links */}
        <div className=" gap-4 items-center justify-end text-md hidden md:flex">
          <a
            href="https://www.facebook.com/AhmedNuman2004"
            target="_blank"
            className="p-3 rounded-full bg-[#1e1e1e] cursor-pointer hover:bg-Primary transition-colors duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/ahmednuman70/"
            target="_blank"
            className="p-3 rounded-full bg-[#1e1e1e] cursor-pointer hover:bg-Primary transition-colors duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/layekahmednuman/"
            target="_blank"
            className="p-3 rounded-full bg-[#1e1e1e] cursor-pointer hover:bg-Primary transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>

          {/* <a
            href=""
            target="_blank"
            className="p-3 rounded-full bg-Primary cursor-pointer"
          >
            <MdOutlineMenuOpen />
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
