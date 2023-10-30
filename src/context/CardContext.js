import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Initialize state from localStorage or default to empty array
    const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartItems, setCartItems] = useState(initialCartItems);

    useEffect(() => {
        // Save to localStorage whenever cartItems change
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const deleteItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
 