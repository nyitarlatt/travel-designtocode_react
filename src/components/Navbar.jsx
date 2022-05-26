import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import { Logo } from "../assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState();
  const [showMenuBtn, setShowMenuBtn] = useState(true);

  const displayMenu = () => {};

  return (
    <div>
      <div className="w-4/5 mx-auto flex justify-between py-8 relative">
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hidden lg:flex text-sm space-x-10 xl:space-x-20 flex  xl:text-lg font-opensans cursor-pointer">
          <div className=" flex space-x-12 items-center">
            <a href="#" className="hover:text-travelBlue">
              Destinations
            </a>
            <a href="#" className="hover:text-travelBlue">
              Hotels
            </a>
            <a href="#" className="hover:text-travelBlue">
              Flights
            </a>
            <a href="#" className="hover:text-travelBlue">
              Bookings
            </a>
          </div>

          <div className="flex space-x-12 items-center">
            <div className="hover:text-travelBlue">Login</div>
            <div className="hover:text-white hover:bg-travelBlue border-2 rounded-lg border-black py-2 px-4 ">
              Sign Up
            </div>
            <div className="hover:text-travelBlue">En</div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <MenuIcon
            onClick={() => {
              setShowMenu(true);
            }}
          />
        </div>
        {showMenu && (
          <div className="absolute top-10 right-0 w-1/4 bg-white text-sm text-black flex flex-col px-2 border-2">
            <div
              className="text-2xl ml-auto pr-2 cursor-pointer"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              x
            </div>
            <a
              href="#"
              className="hover:bg-travelBlack hover:text-white  w-full py-2 border-b-2 border-black"
            >
              Destinations
            </a>
            <a
              href="#"
              className="hover:bg-travelBlack hover:text-white  w-full py-2 border-b-2 border-black"
            >
              Hotels
            </a>
            <a
              href="#"
              className="hover:bg-travelBlack hover:text-white  w-full py-2 border-b-2 border-black"
            >
              Flights
            </a>
            <a
              href="#"
              className="hover:bg-travelBlack hover:text-white  w-full py-2 border-b-2 border-black"
            >
              Bookings
            </a>
            <div className="hover:bg-travelBlack hover:text-white  w-full py-2 border-b-2 border-black">
              Login
            </div>
            <div className="hover:bg-travelBlack hover:text-white  w-full py-2 border-b-2 border-black">
              Sign Up
            </div>
            <div className="hover:bg-travelBlack hover:text-white  w-full py-2 border-b-2 border-black">
              En
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
