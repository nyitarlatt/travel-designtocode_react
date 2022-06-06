import React from "react";
import { image, polygon } from "../assets";

const Home = () => {
  return (
    <div id="home">
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col space-y-6 mt-20 items-center lg:items-start">
          <div className="uppercase text-travelRed font-bold">
            Best Destinations around the world
          </div>
          <div className="text-black text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </div>
          <div className="text-base text-travelTextLight">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <div className="flex space-x-8">
            <div className="bg-travelYellow py-3 px-4 rounded-xl text-white">
              Find out more
            </div>
            <div className="flex justify-between items-center space-x-4">
              <div className="flex items-center justify-center bg-travelRed w-12 h-12 rounded-full">
                <img src={polygon} alt="" />
              </div>
              <div className="text-travelTextLight text-lg">Play Demo</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={image} alt="travel" />
        </div>
      </div>
    </div>
  );
};

export default Home;
