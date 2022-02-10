import React from "react";
import Image3 from "../../assets/images/latestwork1.jpg";
import Image2 from "../../assets/images/latestwork2.jpg";
import Image1 from "../../assets/images/latestwork3.jpg";
import User from "../../assets/images/user.jpg";
const UpcomingSales = () => {
  return (
    <div className="section-space">
      <div className="container">
        <h4 className="font-serif text-3xl font-light">Upcoming sales</h4>
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {cardList.map((v, i) => (
            <div className=" shadow-2xl" key={i}>
              <div className=" w-full card-img-wrapper">
                <img src={v.img} alt="" className="" />
              </div>
              <div className="p-4">
                <div className="bg-white flex items-center justify-between text-black ">
                  <p className="font-light">{v.title}</p>
                  <p className="text-xs font-bold">{v.list}</p>
                </div>
                <div className="mt-4 grid grid-flow-col justify-start items-center gap-x-2">
                  <div className="w-8 h-8 overflow-hidden rounded-full ">
                    <img src={v.userImage} alt="" />
                  </div>
                  <p className="font-light text-base font-serif">
                    {v.userName}
                  </p>
                </div>
              </div>
              <div className="p-4 card-btm font-medium">
                <p>Price</p>
                <p>Ξ {v.price}</p>
              </div>
            </div>
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
