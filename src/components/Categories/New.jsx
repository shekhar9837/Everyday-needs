import React from "react";
import { data } from "../../data";
import { Link } from "react-router-dom";

const New = () => {
  
  const PageUp=()=>{
    window.scrollTo({top:(0,0), behavior:'smooth'});
  }
  
  return (
    
    <div className=" relative flex flex-col items-center justify-start ">
      <div className="flex flex-col items-center  justify-centermd:mt-20 ">
        <div className="md:w-[70%] text-[1.2rem]">
      <h1 className="  px-6 mt-10">Maker:</h1>
      <h1 className=" px-6 mb-10">New</h1>
      </div>
        <div className="md:w-[70%]  md:px-4 px-2 grid md:grid-cols-4 grid-cols-2  grid-row-auto  text-white md:gap-2 gap-0">
          {data.map((item) => (
            <div key={item.id} className="relative  cursor-pointer md:p-0 p-1">
              <Link to={`/products/${item.handle}`} onClick={()=>PageUp()}>
              <div className="text-white text-[11px] absolute inset-0 md:p-6 p-4 md:opacity-0  hover:opacity-100 transition-opacity">
                <h1 className="md:flex hidden">{item.vendor}</h1>
                <h1 className="mt-4 text-sm ">{item.title}</h1>
                <p className="mt-2 text-[11px]">${item.price / 100}.00</p>
              </div>
              <img
                className="object-cover "
                loading="lazy"
                src={item.images}
                alt={item.title}
              />
          </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;
