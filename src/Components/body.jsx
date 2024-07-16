
import React, { useState } from "react";
import "./body.css";

const Body = () => {
  const images = {
    black: "https://i.pinimg.com/564x/d3/3a/6b/d33a6b7a8f2460f81eb7c32c51acf41f.jpg",
    blue: "https://www.fgear.in/cdn/shop/files/1_d4aed5d4-acca-463e-b904-bd41dfa2436c.jpg?v=1700192046&width=713",
    brown: "https://images.unsplash.com/photo-1625598853001-a4edddf2440c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    beige: "https://images.unsplash.com/photo-1550253594-356b2f788907?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  const [currentImage, setCurrentImage] = useState(images.black);

  const Change = (color) => {
    setCurrentImage(images[color]);
  };

  return (
    <>
      <div className="h-[90vh] w-full flex">
        <div className="w-1/2">
          <img
            className="h-[90%] w-[90%]"
            src={currentImage}
            alt="Landing"
            height={90}
            width={200}
          />
        </div>
        <div className="h-[90vh] w-1/2 flex flex-col item-center justify-center">
          <div className="h-[45%] w-full text-center">
            <h1 className="text-4xl font-medium mt-8 text-[#52525a]">
              The Modern Zip
              <br />
              Bigpack
            </h1>
            <p className="text-[10px] mt-[5px]">
              by <span className="opacity-50">Anna widson</span>
            </p>
            <br />
            <div className="flex flex-col justify-center items-center">
              <div>
                <h2 className="text-[25px] font-semibold text-[#52525a]">
                  <span className="text-[12px]">₹</span>7999
                </h2>
              </div>
              <div className="mt-2 h-0.5 w-12 bg-black rounded-md"></div>
            </div>
            <p className="w-[50%] ml-[179px] mt-[8px] text-[10px] leading-3 font-normal opacity-40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              libero quibusdam ab vero laudantium hic quas qui harum at culpa
              Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur
              adipisicing..
            </p>
          </div>
          <div className="h-[55%] w-full flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <div
                className="w-8 h-8 bg-[#26232A] rounded-full cursor-pointer"
                onClick={() => Change('black')}
              ></div>
              <div
                className="w-8 h-8 bg-[#364567] rounded-full cursor-pointer"
                onClick={() => Change('blue')}
              ></div>
              <div
                className="w-8 h-8 bg-[#68382E] rounded-full cursor-pointer"
                onClick={() => Change('brown')}
              ></div>
              <div
                className="w-8 h-8 bg-[#8D6449] rounded-full cursor-pointer"
                onClick={() => Change('beige')}
              ></div>
            </div>
            <div>
              <p className="ml-[200px] mt-2 text-[10px]">QUANTITY</p>
              <div className="w-[17%] bg-[#d3d3d880] rounded-2xl text-center ml-[187px] mt-1 cursor-pointer">
                + 1 -
              </div>
              <br />
              <div className="w-28 bg-zinc-700 text-white px-[25px] py-[12px] border rounded-xl ml-[170px] text-[10px] cursor-pointer">
                ADD TO BAG
              </div>
              <div className="mt-[70px]">
                <ul className="h-1/5 w-1/2 flex space-x-16 gap-2 opacity-50 cursor-pointer">
                  <li>Details</li>
                  <li>Feature</li>
                  <li>Description</li>
                  <li>Explore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
