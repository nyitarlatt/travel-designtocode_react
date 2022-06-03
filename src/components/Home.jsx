import React from "react";
import { image } from "../assets";

const Home = () => {
  return (
    <div id="home">
      <div className="w-4/5 mx-auto w-4/5  flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col space-y-10 mt-20">
          <h3 classname="font-poppins">Best Destinations around the world</h3>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p classname="font-poppins">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the
          </p>
          <div className="flex space-x-10">
            <div>a</div>
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
