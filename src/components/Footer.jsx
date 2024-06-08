import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const PageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };
  return (
    <div className="w-full  relative  md:my-40">
      <div className="flex md:flex-row flex-col-reverse md:px-0 px-2">
        <div className="flex  flex-row   md:px-10 px-4  md:py-20  md:gap-20 gap-10  md:absolute top-[70%]">
          <div className="text-[0.8rem]">
            <ul className="block ">
              <Link onClick={PageUp} to='pages/about-us'>  <li>About</li></Link>
              <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">   <li>Instagram</li></Link>
                    <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">   <li>Facebook</li></Link>
            </ul>
            <ul className="py-4">
              <li>Terms</li>
              <li>Careers</li>
              <li>Back to top</li>
              <li>Terms of Service</li>
              <li>Refund policy</li>
            </ul>
            <ul className="py-4 md:flex hidden ">
              <Link to='https://github.com/shekhar1378' target="_blank" rel="noopener noreferrer"> <li>site By ❤️</li></Link>
             
            </ul>
          </div>
         
          <div className="text-[0.8rem]">
            <p className="py-1 block">Store Location & Hours:</p>
            <p className="py-1 block">270 Ponsonby Road, Auckland 1011</p>
            <p className="py-1 block">Monday to Saturday 9:30am - 5:00pm</p>
            <p className="py-1">Sunday 9:30am - 4:30pm</p>
            <p className="py-1">Click & Collect is available within store hours</p>
          </div>
        </div>
        <div className="font-medium  text-[1.2rem] px-4 py-12 md:absolute top-[50%] right-[10%]">
          <h1>Tel: +64-9-378-7988</h1>
          <h1>studio@everyday-needs.com</h1>
          <h1>Subscribe to our Newsletter</h1>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center">
          <ul className="py-4  ">
          <Link to='https://github.com/shekhar1378' target="_blank" rel="noopener noreferrer"> <li>site By ❤️</li></Link>
            </ul>
          </div>
    </div>
  );
};

export default Footer;
