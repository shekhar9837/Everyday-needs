// ProductPage.js
import React,{useContext, useState} from "react";
import { useParams } from "react-router-dom";
import { data } from "../data.js";
import { CartContext } from '../Context/Cart'
import Notification from "../components/Notification.jsx";
import { motion } from "framer-motion";


const ProductPage = () => {
  
  const { handle } = useParams();
  const product = data.find((item) => item.handle === handle);
  const { addToCart} = useContext(CartContext);

  const [notification, setNotification] = useState(null);

  const handleAddToCart = () => {
    addToCart(product)
    // Add item to cart logic
    setNotification("Item added to cart successfully!");
    // Clear notification after a certain time
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Adjust the time as per your requirement
  };

  if (!product ) {
    return <p>Product not found.</p>;
  }

  const sections = product.description
  ? product.description
      .split("<!-- split -->")
      .map((section) => section.split("<p>").filter(Boolean))
  : [];

  // Render the product details
  return (
    <>
     <div className="relative flex justify-center items-center top-8">
      {notification && <motion.div initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
               className="notification absolute   bg-zinc-700 text-white px-4 py-2 rounded-md mt-4 mr-4 z-50">
          {notification}
        </motion.div>}
      </div>
      <div className=" flex items-start justify-center z-5">
        <div className=" flex flex-col items-center justify-between md:mt-20 mt-5  my-20">
          <div className="md:w-[70%] w-full px-6 flex justify-between items-center">
            <div className="md:w-[70%]">
              <h2 className="text-xs">{product.vendor}</h2>
              <h1 className="block mt-4">{product.title}</h1>
            </div>
            <div className="md:w-[30%] px-4">
              <h4 className="text-xs">price</h4>
              <h4 className="mt-4">${product.price / 100}.00</h4>
            </div>
          </div>

          <div className="md:w-[70%]  md:ml-6 md:mr-6 flex md:flex-row flex-col items-start justify-between px-6  mt-10 md:gap-10">
            <div className="md:w-[70%]">
              <img
                className=""
                loading="lazy"
                width={500}
                src={product.images[0]}
                alt=""
              />
            </div>

            <div className="md:w-[30%] ">
              <div>
                <button onClick={handleAddToCart} className="md:mt-0 mt-10 bg-zinc-600 text-white text-xs px-16 py-4 hover:text-black hover:bg-white border hover:border-black">
                  Add to Cart
                </button>
              </div>
              <div className="text-[11px] text-wrap mt-16 ">
                <h4 className="font-semibold">Description</h4>
                {sections[0].map((paragraph, index) => (
                  <p
                    className="mt-4"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
                {sections && sections.length > 1 && (
                  <div className="mt-4 ">
                    <h4 className="font-semibold">Dimensions</h4>
                    {sections[1].map((paragraph, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
