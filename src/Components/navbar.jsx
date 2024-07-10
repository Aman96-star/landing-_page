import React from 'react';
import './navbar.css';
// import 'remixicon/fonts/remixicon.css'
// import {RiHeartFill} from "remixicon-"
// // import { RiHeartFill } from "@remixicon/react";


const Navbar = () => {
  return (
    <>
      <div className='nav_1'>
        <div className="sec_1">
          <h1 className=" text-black font-bold text-2xl ">Hide</h1>
        </div>
        <div className='sec_2'>
          <ul className='nav_list'>
            <li><span className="opacity-70 text-[14px]">MY ACCOUNT</span></li>   
            <i class="ri-store-line"></i>
            <i class="ri-search-line"></i>
            <i class="ri-menu-line"></i>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
