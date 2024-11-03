# FoodFusion

FoodFusion is a MERN (MongoDB, Express.js, React.js, Node.js) stack-based food delivery application. It allows users to browse through various food categories, add items to their cart, and place orders. With features like user authentication, order management, and a streamlined checkout process, FoodFusion aims to provide a seamless food ordering experience.

# Table of Contents

    Features
    Tech Stack
    Project Structure
    Installation
    Usage
    Future Enhancements
    Contributing
    License

# Features

# User Features

    Sign Up / Login: Users can sign up and log in with JWT-based authentication. Passwords are hashed with bcrypt for added security.
    Browse Food by Category: Users can view a variety of food items organized by categories.
    Search: Quickly find food items using the search bar.
    Add to Cart: Select quantity and size for food items and add them to the cart.
    Checkout: Review items in the cart, proceed to checkout, and place an order.
    Order History: View previously ordered items in the "My Orders" section.

# Admin Features

    Order Management: Admins can view, update, and manage orders placed by users.
    Product Management: Admins can add, update, or delete food items from the menu.
    User Management: Admins have access to user information and can manage user accounts.

# Tech Stack

    Frontend: React.js, Tailwind CSS
    Backend: Node.js, Express.js
    Database: MongoDB
    Authentication: JSON Web Token (JWT) for session management and bcrypt for password hashing

# Project Structure


FoodFusion/
    ├── backend-2/               # Backend section of the project
    │   ├── Routes/               # Contains API route definitions
    │   ├── models/               # Database models
    │   ├── db.js                 # Database configuration file
    │   ├── index.js              # Main server file
    │   ├── package.json          # Backend dependencies and scripts
    │   ├── package-lock.json     # Backend dependency lock file
    │   └── vercel.json           # Vercel configuration for deployment
    │
    ├── frontend/                 # Frontend section of the project
    │   ├── public/               # Public assets and files (do not modify directly)
    │   ├── src/                  # Source code for the frontend
    │   │   ├── SCREENS/          # Contains main screens of the application
    │   │   ├── components/       # Reusable components
    │   │   ├── App.css           # Main CSS for the App component
    │   │   ├── App.js            # Root App component
    │   │   ├── App.test.js       # Unit tests for the App component
    │   │   ├── Modal.js          # Modal component file
    │   │   ├── index.css         # Main CSS file
    │   │   ├── index.js          # Main entry point for React
    │   │   ├── reportWebVitals.js# Web vitals performance tracking
    │   │   └── setupTests.js     # Jest setup for testing
    │   │
    │   ├── README.md             # Project documentation for frontend
    │   ├── package.json          # Frontend dependencies and scripts
    │   └── package-lock.json     # Frontend dependency lock file
    │
    └── README.md                 # Root README file for the project


# Installation

# Prerequisites

    Node.js
    MongoDB

# Setup

1.  Clone the repository:
    git clone https://github.com/yourusername/FoodFusion.git
    cd FoodFusion

2. Install dependencies for both frontend and backend:
    Frontend
    cd client
    npm install

    Backend
    cd ../server
    npm install

3. Configure Environment Variables:
   Create a .env file in the server directory with the following variables:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. Run the application:
   
   Open two terminals for frontend and backend:
   In the client folder
   npm start

   In the server folder
   npm run dev

# Usage

    Sign Up/Login: Create an account or log in with existing credentials.
    Browse and Search: View available food items by category or use the search feature.
    Add to Cart: Select items, specify quantity and size, then add them to the cart.
    Checkout: Review your cart and place an order.
    View Order History: Check previously ordered items in the "My Orders" section.

# Future Enhancements

    Real-Time Order Tracking: Allow users to track their orders in real-time.
    Scheduled Deliveries: Users can schedule orders for later times.
    Personalized Recommendations: Provide food recommendations based on user preferences and past orders.
    Loyalty Rewards Program: Introduce a rewards system for frequent users.

# Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

    Fork the project.
    Create a new branch for your feature (git checkout -b feature/AmazingFeature).
    Commit your changes (git commit -m 'Add some AmazingFeature').
    Push to the branch (git push origin feature/AmazingFeature).
    Open a Pull Request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.



    
