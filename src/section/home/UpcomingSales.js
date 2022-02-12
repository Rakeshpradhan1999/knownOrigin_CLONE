import React from "react";
import Image3 from "../../assets/images/latestwork1.jpg";
import Image2 from "../../assets/images/latestwork2.jpg";
import Image1 from "../../assets/images/latestwork3.jpg";
import User from "../../assets/images/user.jpg";
import { NftCard } from "../../compnents";
const UpcomingSales = () => {
  return (
    <div className="section-space">
      <div className="container">
        <h4 className="font-serif text-3xl font-light">Upcoming sales</h4>
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {cardList.map((v, i) => (
            <React.Fragment key={i}>
              <NftCard data={v} />
            </React.Fragment>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className=" bg-transparent border border-blue-500 text-blue-500 rounded-md  py-2 px-4 ml-4">
            View upcoming sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSales;

const cardList = [
  {
    img: Image1,
    title: "Severance",
    userImage: User,
    userName: "DarkenemOOd",
    price: "0.7",
    list: "1/1",
  },
  {
    img: Image2,
    title: "Distorted Purity",
    userImage: User,
    userName: "myitchyfinger",
    price: "0.2",
    list: "1/1",
  },
  {
    img: Image3,
    title: "NEO SHARK",
    userImage: User,
    userName: "VAMORBO",
    price: "0.04",
    list: "1/10",
  },
  {
    img: Image1,
    title: "Severance",
    userImage: User,
    userName: "DarkenemOOd",
    price: "0.7",
    list: "1/1",
  },
  {
    img: Image2,
    title: "Distorted Purity",
    userImage: User,
    userName: "myitchyfinger",
    price: "0.2",
    list: "1/1",
  },
  {
    img: Image3,
    title: "NEO SHARK",
    userImage: User,
    userName: "VAMORBO",
    price: "0.04",
    list: "1/10",
  },
];
