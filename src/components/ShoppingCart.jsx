import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ShoppingCart = ({ closeCart }) => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-white   opacity-90 z-9"
        onClick={closeCart}
      ></div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }} 
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          ease: "easeInOut",
        }}
        className="flex flex-col  items-center justify-start z-99 absolute md:w-[32%] w-[90%] h-screen bg-[#899387] top-0 right-0  text-white px-6 "
      >
        <div className="flex h-screen flex-col items-center md:justify-between ">
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[0.7rem] px-8 py-8">
                Your Cart({cartItems.length})
              </h1>
              <div className="absolute top-[2.5rem] right-[1.6rem]">
                <button onClick={closeCart}>
                  <IoClose className="h-5 w-5 " />
                </button>
              </div>
              {cartItems.length > 0 ? (
                <div>
                  <div className="w-full border-b-[1px] border-white "></div>

                  <div className="w-full md:h-80 h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <>
                        <div
                          key={item.id}
                          className="w-full border-b-[1px] border-white "
                        ></div>
                        <div className=" flex  justify-start relative py-2">
                          <img
                            src={item.images}
                            width={120}
                            height={180}
                            className=" object-cover "
                            alt=""
                          />
                          <div className="px-6">
                            <h1>{item.vendor}</h1>
                            <h1 className="text-[1rem] py-4 ">{item.title}</h1>
                            <h1>{item.price / 100}.00</h1>
                            <p className="flex items-center">
                              Qty:
                              <button
                                className="px-[4px] cursor-pointer"
                                onClick={() => removeFromCart(item)}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                className="px-[4px] cursor-pointer"
                                onClick={() => addToCart(item)}
                              >
                                +
                              </button>
                            </p>
                            <h1
                              onClick={() => clearCart(item)}
                              className="bottom-2 absolute cursor-pointer"
                            >
                              Remove
                            </h1>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="w-full border-b-[1px] border-white "></div>
                </div>
              ) : (
                <h1 className="text-lg font-bold">Your cart is empty</h1>
              )}
            </div>
          </div>

          <div className=" w-full flex items-center  flex-col px-4 pb-8 ">
            <div className="w-full flex items-start justify-between gap-20 py-6">
              <p className="md:w-1/2 ">
                All orders will be processed in NZD. Shipping calculated during
                checkout.
              </p>
              <span className="md:w-1/2 ">
                <p className="text-[0.8rem] pb-6">Total:</p>
                <p className="text-[1rem]"> ${getCartTotal() / 100}.00</p>
              </span>
            </div>
            <div className="w-full ">
              <Link to='checkouts'>
            <button onClick={closeCart} className="w-full  bg-[#899387] text-white text-[0.9rem] md:px-20 px-4 py-4 border-[1px] border-white hover:bg-[#425D4B] ">
              Proceed to Checkout
            </button>
              </Link>
              </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ShoppingCart;
