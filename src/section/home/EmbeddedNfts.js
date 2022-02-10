import React from "react";
import { ButtonOutline } from "../../compnents/button";
const EmbeddedNfts = () => {
  return (
    <div className="embed-nfts">
      <div className="container pt-20 text-white pb-60 md:pb-72 relative z-20">
        <h2 className="text-5xl md:text-7xl text-white font-serif font-light mb-4 ">
          Embedded NFTs
        </h2>
        <ButtonOutline color="white">View collection</ButtonOutline>
      </div>
    </div>
  );
};

export default EmbeddedNfts;
