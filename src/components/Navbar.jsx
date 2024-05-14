import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { data } from "../data";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import {CartContext} from '../Context/Cart'
import { motion } from "framer-motion"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  // const [products, setProducts] = useState(data);
  const navigate = useNavigate();
  const {cartItems} = useContext(CartContext)


  const handleSearchClick = () => {
    if (!searchVal.trim().length !== 0) {
      navigate('/search-results', {state:searchVal});
    }
   
  };

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  const PageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
    setIsOpen(false);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <nav className="sticky bg-white top-0 z-10 flex items-center text-xs relative">
      <div className="w-full  flex items-center justify-between md:px-0 px-2">
        <div className="md:w-[15%]  flex items-center justify-center ">
          <div onClick={() => toogleMenu()} className="md:hidden">
            <CiMenuBurger
              className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              onClick={() => toogleMenu()}
            />
          </div>
          <Link to="/">
            <div
              onClick={() => PageUp()}
              className=" flex md:flex-col flex-row gap-1 font-semibold  md:text-[2rem] text-[1.4rem] leading-6 py-2 px-2"
            >
              <div className="md:flex hidden border-t-2 border-black w-[1rem]"></div>
              <h1 className="">everyday</h1>
              <div className=" md:flex hidden border-t-2 border-black w-[1rem]"></div>
              <h1 className="">needs</h1>
              <div className="md:flex hidden border-t-2 border-black w-[1rem]"></div>
              {/* <h1 className="border-y-2  border-black">e</h1> <h1>veryday</h1> */}
            </div>
          </Link>
        </div>

        <div className="w-[70%]  min-[918px]:flex  hidden px-6">
          <div className="flex justify-start items-center gap-20 pr-4 text-[0.7rem]">
            <>
            
              <ul className="py-4">
                <Link to="categories/all" onClick={() => PageUp()}>
                  <li>Shop All</li>
                </Link>
                <Link to="categories/new" onClick={() => PageUp()}>
                  <li>New</li>
                </Link>
                <Link to="categories/back-in-stock" onClick={() => PageUp()}>
                  <li>Back in Stock</li>
                </Link>
              </ul>
              <ul>
                <Link to="categories/bedroom" onClick={() => PageUp()}>
                  <li>Bedroom</li>
                </Link>
                <Link to="categories/bathroom" onClick={() => PageUp()}>
                  {" "}
                  <li>Bathroom</li>
                </Link>
                <Link to="categories/living" onClick={() => PageUp()}>
                  {" "}
                  <li>Living</li>
                </Link>
              </ul>
              <ul>
                <Link to="categories/kitchen-table" onClick={() => PageUp()}>
                  {" "}
                  <li>Kitchen & Table</li>
                </Link>
                <Link to="categories/houseKeeping" onClick={() => PageUp()}>
                  {" "}
                  <li>HouseKeeping</li>
                </Link>
                <Link to="categories/outdoors" onClick={() => PageUp()}>
                  {" "}
                  <li>Outdoors</li>
                </Link>
              </ul>
              <ul>
                <Link to="categories/office-paper" onClick={() => PageUp()}>
                  {" "}
                  <li>Office & Paper</li>
                </Link>
                <Link to="categories/apparel" onClick={() => PageUp()}>
                  {" "}
                  <li>Apparel</li>
                </Link>
                <Link to="categories/baby-child" onClick={() => PageUp()}>
                  {" "}
                  <li>Baby & Child</li>
                </Link>
              </ul>
              <ul>
                <Link to="categories/gifting" onClick={() => PageUp()}>
                  {" "}
                  <li>Gifting</li>
                </Link>
                <Link to="categories/sale" onClick={() => PageUp()}>
                  {" "}
                  <li>Sale</li>
                </Link>

                <div className="flex items-center ">
                  <input
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none w-12 hover:border-b-[1px] border-zinc-400 hover:w-20 ease-in-out flex-grow transition-width duration-300"
                  />
                  <button onClick={()=>handleSearchClick()} className="flex items-center justify-center  text-black rounded-r-md ">
                    <IoIosSearch className="h-[15px] w-[15px]" />
                  </button>
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

      <motion.div
       initial={{ x: "100%"}} 
       animate={{ x: 0 }} 
       exit={{ x: "100%"} } 
       transition={{ type: "spring", stiffness: 200, damping: 20}}

        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed flex flex-col items-start justify-start inset-0 bg-[#899387] transition-transform transform ease-in-out duration-300 w-[80%] px-6`}
        style={{
          // width: "80%",
          maxWidth: "400px",
          right: isOpen ? "0" : "-100%",
        }}
      >
        <div className=" mt-4 flex  border-b  border-white items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className="text-[1rem] bg-transparent  focus:outline-none"
          />
          <IoIosSearch className="text-white h-4 w-4" />
        </div>
        <IoClose
          className={`h-4 w-4 absolute top-5 right-8 text-white`}
          onClick={toogleMenu}
        />
        <div className="flex  gap-10 text-[0.9rem] text-white mt-8 ">
          <div className=" ">
            <ul className="">
              <li>Home</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
            <div className="border-b border-white w-3  mt-3 mb-3"></div>
            <ul>
              <li>The Makers</li>
              <li>The Journal</li>
              <li>The Edit</li>
            </ul>
            <div className="border-b border-white w-3  mt-3 mb-3"></div>
            <ul>
              <li>Paymenst</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Terms</li>
            </ul>
            <div className="border-b border-white w-3 mt-3 mb-3"></div>
            <ul>
              <li>Log In</li>
              <li>Your Edit</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <Link to="categories/all" onClick={() => PageUp()}>
                <li>Shop All</li>
              </Link>
              <Link to="categories/new" onClick={() => PageUp()}>
                <li>New</li>
              </Link>
              <Link to="categories/back-in-stock" onClick={() => PageUp()}>
                <li>Back in Stock</li>
              </Link>
            </ul>
            <div className="border-b border-white w-3 mt-3 mb-3"></div>
            <ul>
              <Link to="categories/bedroom" onClick={() => PageUp()}>
                <li>Bedroom</li>
              </Link>
              <Link to="categories/bathroom" onClick={() => PageUp()}>
                <li>Bathroom</li>
              </Link>
              <Link to="categories/living" onClick={() => PageUp()}>
                <li>Living</li>
              </Link>
              <Link to="categories/kitchen-table" onClick={() => PageUp()}>
                <li>Kitchen & Table</li>
              </Link>
              <Link to="categories/houseKeeping" onClick={() => PageUp()}>
                <li>HouseKeeping</li>
              </Link>
              <Link to="categories/outdoors" onClick={() => PageUp()}>
                <li>Outdoors</li>
              </Link>
              <Link to="categories/office-paper" onClick={() => PageUp()}>
                <li>Office & Paper</li>
              </Link>
              <Link to="categories/apparel" onClick={() => PageUp()}>
                <li>Apparel</li>
              </Link>
              <Link to="categories/baby-child" onClick={() => PageUp()}>
                <li>Baby & Child</li>
              </Link>
              <Link to="categories/gifting" onClick={() => PageUp()}>
                <li>Gifting</li>
              </Link>
              <Link to="categories/sale" onClick={() => PageUp()}>
                <li>Sale</li>
              </Link>
            </ul>
          </div>
        </div>
      </motion.div>

      {isCartOpen && <ShoppingCart closeCart={closeCart} />}

    </nav>
  );
};

export default Navbar;
