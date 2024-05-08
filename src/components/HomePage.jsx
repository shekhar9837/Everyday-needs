import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full   ">
        <div className="flex flex-col">
      <div className=" flex flex-row mt-20 gap-20 py-24">
        <div className=" w-[20rem] h-[35rem]  p-1 text-[1.8rem] font-regular px-4">
          <img src="/img/Mug.webp" className="object-fit  " alt="" />
          <h1 className="pt-3  ">Shop //</h1>
          <h1 className="pb-3 ">Back in Stock</h1>
          <h5 className="text-[0.8rem] border-b-[1px] border-black inline ">
            Shop Back in Stock
          </h5>
        </div>

        <div className="  w-[30rem]  p-1 text-[1.8rem] ml-12 font-regular ">
          <img src="/img/knife.webp" className="object-fit  " alt="" />
          <h5 className="text-[0.8rem]  -mb-4">New in</h5>
          <h5 className="text-[0.8rem] border-b-[1px] border-black inline ">
            Shop New Arrivals
          </h5>
        </div>
      </div>
      <div className="flex px-24 py-24 gap-40">
        <div className="w-1/4">
        <h1 className="text-[2rem] pb-8">The Journal</h1>
        <h5 className="text-[0.8rem] border-b-[1px] border-black inline">View Journal</h5>
        <p className="text-[0.8rem] pt-8">We believe everyday items have the ability to add to the beauty of our living spaces. The Journal showcases our products in homes, both of real customers and the campaign shoots styled by us.</p>
        </div>

        <div className="w-1/2 flex flex-col items-center">
            <img src="/img/Journal.webp" alt="" />
            <h5 className="text-[0.8rem]  border-b-[1px] border-black inline">View</h5>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
