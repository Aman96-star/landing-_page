import React from "react";
import "./body.css";

const Body = () => {
  return (
    <>
      <div className=" h-[90vh] w-full flex">
<div className="w-1/2">
          <img
            className="h-[100%] w-11/12 pl-32"
            src="https://i.pinimg.com/564x/d3/3a/6b/d33a6b7a8f2460f81eb7c32c51acf41f.jpg"
            alt="Landing"
            height={90}
            width={200}
          />
        </div>        
        <div className=" h-[90vh] w-1/2  flex flex-col item-center justify-center ">
          <div className="h-[45%] w-full text-center ">
            <h1 className=" text-4xl font-medium mt-8 text-[#52525a]  ">The Modern Zip<br></br> Bigpack</h1>
            <p className="text-[10px] mt-[5px]"> by <span className="opacity-50 ">Anna widson</span></p>
            <br/>
            <div className="flex flex-col justify-center items-center ">
              <div>
                <h2 className=" text-[25px] font-semibold  text-[#52525a] "> <span className="text-[12px] ">₹</span>7999</h2>
              </div>
              
              <div className="mt-2 h-0.5 w-12  bg-black rounded-md"></div>
            </div>
            
            <p className="  w-80 ml-[190px]">
            <span className="opacity-50 text-[10px]">Lorem ipsum dolor sit amet,consectetur adipisicing elit. Deleniti libero quibusdam ab vero laudantium hic quas qui harum at culpa Lorem ipsum dolor sit amet.</span>
            </p>
          </div>
          <div className=" h-[55%] w-full flex flex-col items-center justify-center ">
            <div className="flex space-x-4 ">
              <div className="w-8 h-8 bg-[#26232A] rounded-full"></div>
              <div className="w-8 h-8 bg-[#364567] rounded-full"></div> 
              <div className="w-8 h-8 bg-[#68382E] rounded-full"></div>
              <div className="w-8 h-8 bg-[#8D6449] rounded-full"></div>
            </div>
           
            
           
            <div>
              <p className="ml-[200px] mt-2 text-[10px]">QUANTITY</p>
              <div className=" w-14 border-gray-300   border rounded-xl text-center   ml-[197px] mt-1">
                {" "}
                + 1 -
              </div>
              <br></br>
              <div className="w-28 bg-zinc-700 text-white px-[25px] py-[12px]  border rounded-xl ml-[170px] text-[10px]">
                ADD TO BAG
              </div>
              <div className=" mt-[70px]">
      <ul className= "h-1/5 w-1/2   flex space-x-16 gap-2 opacity-50">
            <li>Detials</li>
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
