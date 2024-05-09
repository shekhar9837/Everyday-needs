import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

// const StickyRightNav = () => {
//   return (
//     <nav className="sticky w-42 top-0 left-0 h-screen bg-gray-800 text-white flex flex-col ">
//       <div className="  bg-red-400 px-10">
//         <h2 className="text-[1rem] font-bold">Menu</h2>
//         <ul className="block text-[0.8rem] px-8">
//           <li className="block">The Makers</li>
//           <li>The Journal</li>
//           <li>The Edit</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// const StickyCart = () => {
//   return (
//     <div className="sticky w-64 top-0 right-0 h-screen bg-gray-800 text-white p-4 ">
//       <h2 className="text-xl font-bold">Cart</h2>
//       <p>Your cart items will go here.</p>
//     </div>
//   );
// };

const ScrollableContent = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center  justify-center">
        <div className=" flex md:flex-row flex-col md:items-start items-center justify-center md:mt-20 md:gap-20 py-24 ">
          <div className=" p-1 text-[1.8rem] font-regular md:px-6">
            <img src="/img/Mug.webp" className="object-fit md:w-[20rem] w-[15rem]" alt="" />
            <h1 className="pt-3  ">Shop //</h1>
            <h1 className="pb-3 ">Back in Stock</h1>
            <h5 className="text-[0.8rem] border-b-[1px] border-black inline ">
              Shop Back in Stock
            </h5>
          </div>

          <div className="p-1 text-[1.8rem] md:ml-12 font-regular md:px-6">
            <img src="/img/knife.webp" className="object-fit  md:w-[30rem] w-[20rem]  " alt="" />
            <h5 className="text-[0.8rem]  -mb-4">New in</h5>
            <h5 className="text-[0.8rem] border-b-[1px] border-black inline ">
              Shop New Arrivals
            </h5>
          </div>
        </div>
        <div className="flex md:flex-row flex-col  justify-center md:px-24 px-4 py-24 gap-20">
          <div className="md:w-1/6 p-2">
            <h1 className="text-[2rem] leading-none">The</h1>
            <h1 className="text-[2rem] leading-none">Journal</h1>
            <h5 className="text-[0.8rem] border-b-[1px] border-black inline-block pt-6">
              View Journal
            </h5>
            <p className="text-[0.8rem] pt-8 md:px-1 px-16">
              We believe everyday items have the ability to add to the beauty of
              our living spaces. The Journal showcases our products in homes,
              both of real customers and the campaign shoots styled by us.
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col items-center p-2">
            <img src="/img/Journal.webp" alt="" />
            <h5 className="text-[0.8rem]  border-b-[1px] border-black inline">
              View
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <ScrollableContent />
      <AboutUs />
    </>
  );
};

export default HomePage;
