import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky bg-white top-0 z-10 flex items-center text-xs">
      <div className="w-full  flex items-center justify-between md:px-0 px-4">
        <div className="md:w-[15%]  flex">
          <div className="  md:inline flex gap-1  md:text-3xl text-[1.2rem] font-bold md:px-6 py-4">
            <div className="md:flex hidden border-t-2 border-black w-[1rem]"></div>
            <h1 className="">everyday</h1>
            <div className=" md:flex hidden border-t-2 border-black w-[1rem]"></div>
            <h1 className="">needs</h1>
            <div className="md:flex hidden border-t-2 border-black w-[1rem]"></div>
            {/* <h1 className="border-y-2  border-black">e</h1> <h1>veryday</h1> */}
          </div>
        </div>

        <div className="w-[70%]  md:flex hidden px-10 ">
          <div className="flex justify-start items-center gap-10 px-4">
            <>
              <ul className="py-4">
                <li >Shop All</li>
                <li >New</li>
                <li >Back in Stock</li>
              </ul>
              <ul>
                <li >Bedroom</li>
                <li >Bathroom</li>
                <li >Living</li>
              </ul>
              <ul>
                <li >Kitchen & Table</li>
                <li>HouseKeeping</li>
                <li>Outdoors</li>
              </ul>
              <ul>
                <li>Office & Paper</li>
                <li>Apparel</li>
                <li>Baby & Child</li>
              </ul>
              <ul>
                <li>Gifting</li>
                <li>Sale</li>
                <li>Search</li>
              </ul>
            </>
          </div>
        </div>
        <div className="md:w-[15%] flex items-center">
          <ul className="md:px-8 text-[0.8rem] ">
            <li>Cart(1)</li>
            <li className="md:flex hidden">LogIn/Your Edit</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
