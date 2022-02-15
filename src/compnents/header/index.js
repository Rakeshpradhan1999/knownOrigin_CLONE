import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { ButtonOutline } from "../button";
import "./style.css";
const Header = () => {
  const [show, setShow] = useState(false);
  const menuHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="bg-white shadow-md">
      <div className="container flex justify-between items-center">
        <Link to="/" className=" text-3xl font-light py-4 font-serif ">
          Snifty.io
        </Link>
        <div className="md:grid grid-flow-col justify-start items-center hidden ">
          {linkList.map((v, i) => (
            <Link to={v.link} key={i} className="block p-4 font-light text-2xl">
              {v.title}
            </Link>
          ))}
          {/* <button className=" bg-transparent border border-blue-500 text-blue-500 rounded-md  py-2 px-4 ml-4">
            Connect Wallet
          </button> */}
          <ButtonOutline>Connect Wallet</ButtonOutline>
        </div>
        <button className="text-2xl md:hidden" onClick={menuHandler}>
          <HiMenuAlt3 />
        </button>
        <div className={`mobile-menu ${show && "active"} md:hidden`}>
          {linkList.map((v, i) => (
            <Link
              to={v.link}
              key={i}
              className="block p-2 text-center py-3 font-light text-xl text-dark-600 "
            >
              {v.title}
            </Link>
          ))}
          <div className="py-2 text-center pb-4">
            <ButtonOutline>Connect Wallet</ButtonOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const linkList = [
  {
    title: "Marketplace",
    link: "/marketplace",
  },
  {
    title: "Auction",
    link: "/auction",
  },
];
