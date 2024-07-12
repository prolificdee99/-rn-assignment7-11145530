import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const savedCartItems = await AsyncStorage.getItem('cartItems');
      if (savedCartItems !== null) {
        setCartItems(JSON.parse(savedCartItems));
      }
    } catch (error) {
      console.error('Error loading cart items:', error);
    }
  };

  const addToCart = async (item) => {
    try {
        const isAlreadyAdded = cartItems.some((cartItem) => cartItem.id === item.id);

    if (isAlreadyAdded) {
      console.log('Item already added to cart');

      return; 
    }
      const updatedCart = [
        ...cartItems,
        { 
            ...item, 
            removeImage: require('../assets/remove.png')
        }
    ];


      setCartItems(updatedCart);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCartItems = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
      setCartItems([]);
      console.log('Cart items cleared successfully');
    } catch (error) {
      console.error('Error clearing cart items:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
