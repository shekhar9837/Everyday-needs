import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Cart';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { cartItems, clearCart, getCartTotal } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useNavigate();

  const paymentSuccess = () => {
    if (!cardNumber || !expiration || !cvv) {
      setErrorMessage('Please fill in all card details.');
      return;
    }

    setErrorMessage('');
    setIsActive(true); 
    clearCart(); 

    
  };



  const onClose =()=>{
    setIsActive(false);
    router("/"); 
  }

  return (
    <div className="flex md:flex-row flex-col py-10 items-start justify-center min-h-screen md:gap-20">
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6">Payment Checkout</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                 value={cardNumber}
                 onChange={(e) => setCardNumber(e.target.value)}

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
                value={expiration}
                 onChange={(e) => setExpiration(e.target.value)}
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
                value={cvv}
                 onChange={(e) => setCvv(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  type="text"
                  placeholder="Enter CVV"
                />
              </div>
            </form>
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
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
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6 sticky bottom-0 bg-white py-4 px-8 shadow-lg">
          <p className="text-lg font-semibold">Total: ${getCartTotal()}</p>
          <button onClick={paymentSuccess} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Pay Now
          </button>
        </div>
        {isActive && (
          <div className="fixed top-0 left-0 w-full h-screen z-50 bg-gray-500 ">
            <div className="flex justify-center items-center h-full">
              <div className="bg-white shadow-lg rounded-lg p-8 w-4/5">
                <h2 className="text-3xl font-bold text-center mb-6">Payment Successful!</h2>
                <p>Thank you for your purchase. Your order will be delivered soon.</p>
                <button onClick={onClose} className="w-full bg-[#899387] text-white text-[0.9rem] md:px-20 px-4 py-4 border-[1px] border-white hover:bg-[#425D4B]">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
