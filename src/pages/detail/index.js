/* eslint-disable no-unused-vars */
import React from "react";
import { Layout } from "../../compnents";
import UserImage from "../../assets/images/user.jpg";
import { BsFillPatchCheckFill, BsFillShareFill, BsEye } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineDownload, AiOutlineHeart } from "react-icons/ai";
import detailsImage from "../../assets/images/detail.jpeg";
import Image3 from "../../assets/images/card1.png";
import Image2 from "../../assets/images/card2.png";
import Image1 from "../../assets/images/card3.png";
import User from "../../assets/images/user.jpg";
import TabComponent from "./components/TabComponent";
import NftCard from "../../compnents/nftcard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Details = () => {
  return (
    <Layout>
      <div className="container py-10 text-dark-600">
        <div className="lg:px-10">
          <TopPart />
          <div className="grid md:grid-cols-12 mt-10 gap-x-12">
            {/* RIGHT */}
            <div className=" md:col-span-8">
              <LazyLoadImage src={Image2} effect="blur" className="w-full" />
              <div className="hidden md:block mt-40">
                <h2 className="text-3xl font-serif font-thin ">
                  More by this artist
                </h2>
                <div className="md:grid   grid-cols-2 gap-8 hidden">
                  {data.map((val, i) => (
                    <React.Fragment key={i}>
                      <NftCard data={val} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            {/* LEFT */}
            <div className=" md:col-span-4 mt-10 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-serif font-thin leading-tight">
                Blissful Caustic Portals to Luxurious Self-Annihilation 20
              </h1>
              <div className="flex items-end  font-thin text-4xl mt-6">
                <span>Ξ 0.08</span>
                <span className="text-base "> / $245</span>
              </div>
              <div>
                <button className=" bg-blue-600 hover:bg-blue-500 py-3 w-full text-white  rounded-md text-xl mt-4">
                  Buy with ETH
                </button>
                <button className=" bg-transparent text-dark-600 border border-dark-600 py-3 w-full  rounded-md text-xl mt-4">
                  Buy with Card
                </button>
                <div>
                  <p className=" font-bold mt-8 mb-6">Description</p>
                  <p className="font-thin">
                    A blissfully caustic moment of pure, unadulterated passion.
                    A dreamy, hazy, prismatic representation of the explosion of
                    emotion, desire and the pure energy of two lovers who are
                    utterly lost in one another.
                  </p>
                  <p className="font-thin py-4">3500x3500px</p>
                  <p className="font-thin py-4">300dpi</p>
                  <p className="font-thin py-4">
                    Created with Cinema 4D, Redshift Render and Photoshop
                  </p>
                  <p className="font-thin py-4">Thank you for lo</p>
                  <div className="font-serif font-thin mb-4 text-xs flex items-center">
                    <span>EXPAND</span>{" "}
                    <span className="text-base ml-1">
                      <AiOutlineDownload />
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4 mt-8">
                    <div className=" text-2xl">
                      <BsFillShareFill />
                    </div>
                    <div className="grid grid-flow-col gap-x-3">
                      <div className="grid  grid-flow-col gap-x-2 items-center justify-start">
                        <span>
                          <BsEye />
                        </span>
                        <span>44</span>
                      </div>
                      <div className="grid  grid-flow-col gap-x-2 items-center justify-start">
                        <span>
                          <AiOutlineHeart />
                        </span>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <p className=" py-4 font-medium">Edition Details</p>
                  <div className="border border-dark-400 flex justify-around pad rounded-md py-5 px-2 text-center  ">
                    {editionDetails.map((val, i) => (
                      <div key={i}>
                        <p className=" font-thin text-xs mb-1">{val.title}</p>
                        <p className="font-bold">{val.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap  justify-start mt-10">
                    {taglist.map((val, i) => (
                      <a
                        href={val.link}
                        className=" bg-gray-400 m-1 rounded-md p-1 text-xs shadow-sm font-thin bg-opacity-25"
                        key={i}
                      >
                        #{val.text}
                      </a>
                    ))}
                  </div>
                  <TabComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;

const data = [
  {
    img: Image1,
    title: "Severance",
    userImage: User,
    userName: "DarkenemOOd",
    price: "0.7",
    list: "1/1",
  },
  {
    img: Image3,
    title: "Severance",
    userImage: User,
    userName: "DarkenemOOd",
    price: "0.7",
    list: "1/1",
  },
];

const editionDetails = [
  {
    title: "Edition #",
    desc: "#6964000",
  },
  {
    title: "EDITIONS",
    desc: "1 of 5",
  },
  {
    title: "AVAILABLE",
    desc: "4",
  },
];

const taglist = [
  {
    text: "2020",
    link: "#",
  },
  {
    text: "3d",
    link: "#",
  },
  {
    text: "3dart",
    link: "#",
  },
  {
    text: "3drender",
    link: "#",
  },
  {
    text: "abstract",
    link: "#",
  },
  {
    text: "caustic",
    link: "#",
  },
  {
    text: "hands",
    link: "#",
  },
  {
    text: "loveyourcollection",
    link: "#",
  },
  {
    text: "romance",
    link: "#",
  },
  {
    text: "sexy",
    link: "#",
  },
  {
    text: "art",
    link: "#",
  },
  {
    text: "cinema4d",
    link: "#",
  },
  {
    text: "psychedelic",
    link: "#",
  },
  {
    text: "beauty",
    link: "#",
  },
  {
    text: "rainbow",
    link: "#",
  },
  {
    text: "spectrum",
    link: "#",
  },
  {
    text: "love",
    link: "#",
  },
  {
    text: "digitalart",
    link: "#",
  },
];

const TopPart = () => {
  return (
    <div className="flex justify-start items-center  text-dark-600">
      <div className="rounded-full  overflow-hidden w-16 h-16">
        <img src={UserImage} className="w-full" alt="" />
      </div>
      <div className="ml-4">
        <p className="flex items-center text-3xl font-serif font-light">
          <span>FiveTimesNo</span>
          <span className="ml-1 text-xl text-blue-500">
            <BsFillPatchCheckFill />
          </span>
        </p>
        <p className="flex items-center text-xl font-serif font-thin">
          <span>
            <FaTwitter />
          </span>
          <span className="ml-1">@FiveTimesNo</span>
        </p>
      </div>
    </div>
  );
};
