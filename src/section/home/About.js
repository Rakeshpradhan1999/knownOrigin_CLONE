import React from "react";
import { ButtonOutline } from "../../compnents/button";
const About = () => {
  return (
    <div className=" bg-dark-400 py-40">
      <div className="container text-white">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className=" text-5xl font-serif ">
              Who are KnownOrigin and what are NFTs?
            </h3>
          </div>
          <div>
            <p className=" font-light">
              KnownOrigin is one the world's first, and largest, NFT
              Marketplaces, built on the Ethereum Blockchain. Allowing everyone
              to discover, collect, buy, and sell Digital Art NFTs.
            </p>
            <p className="font-light my-4 ">
              The KnownOrigin platform gives artists a place to create unique,
              authentic, digital collectibles, in the form of NFTs. Blockchain
              technology makes this new approach to digital ownership possible.
            </p>
            <ButtonOutline color="white">Explore Nfts</ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
