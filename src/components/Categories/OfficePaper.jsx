import React from 'react'
import {data} from '../../data.js'
import { Link } from 'react-router-dom';

const OfficePaper = ({PageUp}) => {
const filterData = data.filter((item)=> item.type === 'Office & Paper');
if (filterData.length === 0) {
  return (
    <div className=" ">
     <div className='px-4 flex flex-col items-center justify-center my-20'>
     <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        No Products Found
      </h2>
      <p className="text-gray-600 mb-4 text-center">
        Sorry, we couldn't find any products in this category at the moment.
      </p>
      <Link
        to="/"
        className=" bg-zinc-600 text-white text-xs px-16 py-4 hover:text-black hover:bg-white border hover:border-black "
      >
        Go Back Home
      </Link>
     </div>
    </div>
  );
}


  return (
    <div className='relative flex flex-col items-center justify-start '>
       <div className="flex flex-col items-center justify-center md:mt-20 mt-10">
        
            <div className="md:w-[70%]  md:px-4 px-2 grid md:grid-cols-4 grid-cols-2  grid-row-auto  text-white md:gap-2 gap-0">
          {filterData.map((item) => (
            <div  key={item.id} className="relative  cursor-pointer md:p-0 p-1">
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

  )
}

export default OfficePaper;
