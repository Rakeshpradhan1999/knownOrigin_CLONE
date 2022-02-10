import React from "react";
import { ButtonOutline } from "../../compnents/button";

const JoinCommunity = () => {
  return (
    <div className="bg-white">
      <div className="container text-dark-600 py-40">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className=" text-4xl md:text-5xl font-serif ">
              Become an artist on KnownOrigin
            </h3>
          </div>
          <div>
            <p className=" font-light mb-4">
              Meet the KnownOrigin team, artists and collectors for platform
              updates, announcements, and more...
            </p>

            <ButtonOutline color="dark">Launch discord</ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
