import React, { useState } from "react";
import Switch from "./switch";
const TabComponent = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const [value, setValue] = useState(false);
  const titles = ["Collection", "Favorites", "Offers"];

  return (
    <div className="">
      <div className="grid grid-cols-3">
        {titles.map((val, i) => {
          const isActive = i === currentActive;

          return (
            <div
              onClick={() => setCurrentActive(i)}
              className={`w-full text-center border-b pb-2 cursor-pointer  ${
                isActive
                  ? "border-gray-400 font-normal"
                  : "border-gray-300 font-thin"
              }`}
              key={i}
            >
              {val}
            </div>
          );
        })}
      </div>
      <div>
        {currentActive === 0 ? (
          <Collection value={value} setValue={setValue} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;

const Collection = ({ value, setValue }) => {
  return (
    <div>
      <div className="flex items-center mt-10">
        <Switch
          isOn={value}
          onColor="#5165ff"
          handleToggle={() => setValue((prev) => !prev)}
        />
        <p className="ml-3">Listed for Sale</p>
      </div>
    </div>
  );
};
