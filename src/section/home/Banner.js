import React from "react";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../compnents/button";
import "./style.css";
const Banner = () => {
  return (
    <div className=" banner-home flex flex-col justify-center">
      <div className="container text-white relative z-20 ">
        <div className="">
          <h1 className="text-6xl md:text-7xl font-light font-serif max-w-xl">
            Discover <br /> rare digital art and collect NFTs
          </h1>

          <Link to="/marketplace">
            <ButtonOutline color="white"> View marketplace</ButtonOutline>
          </Link>
          <p className="mt-4">Flame by Cheryl Gurner</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
