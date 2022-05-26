import React from "react";

import { Logo } from "../assets";

const Navbar = () => {
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
        <div className="absolute top-10 right-0 w-1/3 bg-travelBlueLight"></div>
      </div>
    </div>
  );
};

export default Navbar;
