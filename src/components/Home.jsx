import React from "react";
import { image } from "../assets";

const Home = () => {
  return (
    <div id="home bg-black">
      <div className="w-4/5 mx-auto w-4/5  flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col space-y-10 mt-20">
          <div classname="font-poppins text-sm bg-black">
            Best Destinations around the worlds
          </div>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p classname="font-poppins bg-black">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the
          </p>
          <div className="flex space-x-10">
            <div>aasdfsadfsadfsdfsd</div>
            <div>a</div>
          </div>
        </div>
        <div className="flex-1">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
