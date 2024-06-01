import React, { useContext } from 'react';
import { CartContext } from '../Context/Cart';

const PaymentPage = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  return (
    <div className="flex md:flex-row flex-col py-10  items-start justify-center min-h-screen md:gap-20">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Payment Checkout</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardNumber"
              type="text"
              placeholder="Enter your card number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiration">
              Expiration Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiration"
              type="text"
              placeholder="MM/YYYY"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="Enter CVV"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Pay Now
          </button>
        </form>
      </div>
      
      {cartItems.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 mt-8 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4">Cart Items</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 border-b pb-4">
              <p className="text-gray-700"><strong>{item.title}</strong></p>
              <p className="text-gray-500">Price: ${item.price}</p>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <p className="text-lg font-semibold">Total: ${getCartTotal()}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
