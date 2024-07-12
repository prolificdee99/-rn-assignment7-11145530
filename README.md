## myShoppingApp2.0

The myShoppingApp2.0 is an improved version of the original Open Fashion App.
It is a React Native Application, integrated with Expo.
This application fetches products and product information from a mockup Fake API store.

##### **_myShoppingApp -accessible from my repo 'rn-assignment6-11145530'_**

## Introduction

The app allows users to browse products, add them to a cart, and simulate a checkout process. My goal was to implement an easily navigable mobile shopping cart application that showcases clean code architecture and efficient state management.

## Design Choices

Here are the key design choices I made:

- **Drawer Navigation**: I chose to use drawer navigation from the onstart because of how easy it is to use. Upon touching the menu button or via a swipe gesture, the navigation menu is made accessible.  
  It contains the user's name, and displays tabs available in the application.

- **Intuitive Navigation System**: I implemented a straightforward navigation system that allows users to easily move between the product list, product details, and the cart screen.

- The **_cart icon_** is always visible, providing users with quick access to their cart items.

- **Add to Cart and Remove from Cart Feature**: I added small visual objects for when a user adds an item to the cart and when a user removes an item from the cart.

## Fetch API using Fake Store API

Fetch API was used in accessing the Fake Store API (fakestoreapi.com). All products visible in the store or home screen were fetched from this API.

Upon **_clicking the title of a product_** in the store, the user is directed to a Product Details page, which **_contains the product's respective description_**, fetched from the Fake Store API.

## Data Storage Implementation

For data management, I chose to use local storage - Async Storage and React Context Provider. Here is how I implemented it:

1. **CartProvider**:
   I created a CartProvider component that wraps the entire app. This provider manages the cart state, including functions for adding and removing items, and calculating the total price. It ensures that there is a centralized state for cart items and functions that manipulate them.
   By using context, I ensured that cart data is accessible from any component in the app.

2. **Async Storage**:
   I used Async Storage to persist cart data (list of items) between app sessions or restarts.
   Previously saved cart items are retrieved on app launch using AsyncStorage.getItem('cartItems').
   It stores updated cart data after adding, removing or clearing items and removes all cart data from storage when the cart is cleared.

3. **useCart Hook**: To make it easier to access cart functionality throughout the app, I developed a custom useCart hook. This hook contains all the cart-related functions and state, providing a clean and intuitive API for other components to interact with the cart.

4. **State Structure: FlatList, ScrollView and others**:
   The cart state is structured as an array of objects, where each object represents a product with properties like id, title, price, and quantity. This structure allows for efficient updates and calculations.

- These **_objects are rendered in the FlatList_** , passing the array of variations as data. This is seen in the Products List and Cart List components.

- **_ScrollView was used for the Product Details_**, since not all the details fit well in a simple list format. This allows users to scroll vertically and explore the entire product description for a particular product.

## Key Features

- Browse a list of products with clear, high-quality images
- View detailed product information on a separate screen
- Add and remove items from the cart with real-time updates
- See a running total of the cart value
- Simulated checkout process
- Smooth, intuitive drawer and touch navigation between screens

## Future Enhancements

I've identified several areas for potential improvement:

1. Implement user authentication for personalized experiences
2. Integrate a real payment gateway for actual transactions
3. Add product categories and a search functionality to improve product discovery
4. Implement data persistence using AsyncStorage or a similar solution
5. Introduce a wishlist feature for users to save items for later
6. Develop an admin panel for easy product management
7. Implement push notifications for order updates and promotions

## Conclusion

This shopping cart app represents my careful design choices and thoughtful implementation of data management, and throught this, I've created an app that not only serves its purpose effectively but also provides a pleasant user experience.

As I continue to develop and refine my skills, I look forward to expanding this app's functionality and applying these lessons to future projects.

## Here is what my application looks like:

![alt text](/myShoppingApp2.0/src/assets/image1.jpg)
![alt text](/myShoppingApp2.0/src/assets/image2.jpg)
![alt text](/myShoppingApp2.0/src/assets/image3.jpg)
![alt text](/myShoppingApp2.0/src/assets/image4.jpg)
![alt text](/myShoppingApp2.0/src/assets/image5.jpg)
![alt text](/myShoppingApp2.0/src/assets/image6.jpg)
![alt text](/myShoppingApp2.0/src/assets/image7.jpg)
