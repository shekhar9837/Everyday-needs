import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider =({children})=>{
    const [cartItems, setCartItems]= useState(localStorage.getItem('cartItems')?  JSON.parse(localStorage.getItem('cartItems')):[])
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart=(item)=>{
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if(isItemInCart) {
           setCartItems(cartItems.map((cartItem)=> 
            cartItem.id === item.id ?
            {...cartItem, quantity:cartItem.quantity +1 }: 
            cartItem))
        }
        else {
            setCartItems([...cartItems,  {...item, quantity: 1}])
        }
    };

    const removeFromCart=(item)=>{
        const  isItemInCart= cartItems.find((cartItem)=> cartItem.id === item.id);

        if(isItemInCart.quantity ===1){
            setCartItems(cartItems.filter((cartItem)=> cartItem.id !== item.id))
        }
        else if(isItemInCart.quantity > 1)
        setCartItems(cartItems.map((cartItem)=> (
            cartItem.id === item.id ? {...cartItem, quantity:cartItem.quantity-1} : cartItem
        ))) 
    
    }
    const clearCart = (itemToRemove) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
        setCartItems(updatedCartItems);
    };
    
    const getCartTotal=(item)=> {
        return cartItems.reduce((total, item)=> total + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider
        value={{
            cartItems, addToCart, removeFromCart,clearCart,getCartTotal
        }}
        >
            {children}
        </CartContext.Provider>
    )
} 