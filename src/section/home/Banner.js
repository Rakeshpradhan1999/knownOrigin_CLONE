import React from "react";
import "./style.css";
const Banner = () => {
  return (
    <div className=" banner-home flex flex-col justify-center">
      <div className="container text-white relative z-20 ">
        <div className="">
          <h1 className="text-6xl md:text-7xl font-light font-serif max-w-xl">
            Discover <br /> rare digital art and collect NFTs
          </h1>
          <button className="text-white border border-white py-2 px-4 rounded-md mt-10">
            View marketplace
          </button>
          <p className="mt-4">Trivial N°4 by alberto seveso</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
