// src/components/Navbar.js
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { CartContext } from "../Context/Cart";
import { motion, AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useContext(CartContext);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const PageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleSearch = () => {
    setIsOpen(false);
  };
 

  return (
    <>
      <nav className="sticky bg-white top-0 z-10 flex items-center text-xs relative z-2">
        <div className="w-full flex items-center justify-between md:px-0 px-2">
          <div className="md:w-[15%] flex items-center justify-center">
            <div onClick={toggleMenu} className="md:hidden">
              <CiMenuBurger className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} />
            </div>
            <Link to="/">
              <div
                onClick={PageUp}
                className="flex md:flex-col flex-row gap-1 font-semibold md:text-[2rem] text-[1.4rem] leading-6 py-2 px-2"
              >
                <div className="md:flex hidden border-t-2 border-black w-[1rem]"></div>
                <h1 className="">everyday</h1>
                <div className="md:flex hidden border-t-2 border-black w-[1rem]"></div>
                <h1 className="">needs</h1>
                <div className="md:flex hidden border-t-2 border-black w-[1rem]"></div>
              </div>
            </Link>
          </div>

          <div className="w-[70%] min-[918px]:flex hidden px-6">
            <div className="flex justify-start items-center gap-20 pr-4 text-[0.7rem]">
              <>
                <ul className="py-4">
                  <Link to="categories/all" onClick={PageUp}>
                    <li>Shop All</li>
                  </Link>
                  <Link to="categories/new" onClick={PageUp}>
                    <li>New</li>
                  </Link>
                  <Link to="categories/back-in-stock" onClick={PageUp}>
                    <li>Back in Stock</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="categories/bedroom" onClick={PageUp}>
                    <li>Bedroom</li>
                  </Link>
                  <Link to="categories/bathroom" onClick={PageUp}>
                    <li>Bathroom</li>
                  </Link>
                  <Link to="categories/living" onClick={PageUp}>
                    <li>Living</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="categories/kitchen-table" onClick={PageUp}>
                    <li>Kitchen & Table</li>
                  </Link>
                  <Link to="categories/houseKeeping" onClick={PageUp}>
                    <li>HouseKeeping</li>
                  </Link>
                  <Link to="categories/outdoors" onClick={PageUp}>
                    <li>Outdoors</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="categories/office-paper" onClick={PageUp}>
                    <li>Office & Paper</li>
                  </Link>
                  <Link to="categories/apparel" onClick={PageUp}>
                    <li>Apparel</li>
                  </Link>
                  <Link to="categories/baby-child" onClick={PageUp}>
                    <li>Baby & Child</li>
                  </Link>
                </ul>
                <ul>
                  <Link to="categories/gifting" onClick={PageUp}>
                    <li>Gifting</li>
                  </Link>
                  <Link to="categories/sale" onClick={PageUp}>
                    <li>Sale</li>
                  </Link>

                  <div className="flex items-center ">
                    <SearchInput />
                  </div>
                </ul>
              </>
            </div>
          </div>
          <div className="md:w-[15%] flex items-center">
            <ul className="md:px-8 md:text-[0.7rem] text-[0.9rem] px-2 ">
              <h1 onClick={openCart} className="cursor-pointer">
                Cart({cartItems.length})
              </h1>
              <li className="md:flex hidden">LogIn/Your Edit</li>
            </ul>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed flex flex-col items-start justify-start inset-0 bg-[#899387] w-[90%] px-6"
              style={{
                maxWidth: "400px",
              }}
            >
              <div className="mt-4 flex items-center w-full">
                <div className="flex w-full">
                  <SearchInput onSearch={handleSearch} iconColor="text-white" inputWidth="w-[12rem] bg-red-400 border-b-[1px] border-white"/>
                  <IoClose
                    className={`h-5 w-5 absolute top-5 right-6 text-white`}
                    onClick={toggleMenu}
                  />
                </div>
              </div>
              <div className="flex gap-20 text-[0.9rem] text-white mt-8 ">
                <div className=" ">
                  <ul className="">
                    <Link to='/'>  <li>Home</li></Link>
                    <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">   <li>Instagram</li></Link>
                    <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">   <li>Facebook</li></Link>
       
                  </ul>                           
                 
                  
                 
               
                </div>
                <div className="">
                  <ul>
                    <Link to="categories/all" onClick={PageUp}>
                      <li>Shop All</li>
                    </Link>
                    <Link to="categories/new" onClick={PageUp}>
                      <li>New</li>
                    </Link>
                    <Link to="categories/back-in-stock" onClick={PageUp}>
                      <li>Back in Stock</li>
                    </Link>
                  </ul>
                  <div className="border-b border-white w-3 mt-3 mb-3"></div>
                  <ul>
                    <Link to="categories/bedroom" onClick={PageUp}>
                      <li>Bedroom</li>
                    </Link>
                    <Link to="categories/bathroom" onClick={PageUp}>
                      <li>Bathroom</li>
                    </Link>
                    <Link to="categories/living" onClick={PageUp}>
                      <li>Living</li>
                    </Link>
                    <Link to="categories/kitchen-table" onClick={PageUp}>
                      <li>Kitchen & Table</li>
                    </Link>
                    <Link to="categories/houseKeeping" onClick={PageUp}>
                      <li>HouseKeeping</li>
                    </Link>
                    <Link to="categories/outdoors" onClick={PageUp}>
                      <li>Outdoors</li>
                    </Link>
                    <Link to="categories/office-paper" onClick={PageUp}>
                      <li>Office & Paper</li>
                    </Link>
                    <Link to="categories/apparel" onClick={PageUp}>
                      <li>Apparel</li>
                    </Link>
                    <Link to="categories/baby-child" onClick={PageUp}>
                      <li>Baby & Child</li>
                    </Link>
                    <Link to="categories/gifting" onClick={PageUp}>
                      <li>Gifting</li>
                    </Link>
                    <Link to="categories/sale" onClick={PageUp}>
                      <li>Sale</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isCartOpen && <ShoppingCart closeCart={closeCart} />}
      </nav>
    </>
  );
};

export default Navbar;
