# 🍽️ FoodFusion

![React](https://img.shields.io/badge/Frontend-React.js-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

**FoodFusion** is a **MERN (MongoDB, Express.js, React.js, Node.js)** stack-based **food delivery application**.  
It allows users to browse through various food categories, add items to their cart, and place orders — providing a smooth, secure, and enjoyable food ordering experience.

---

## 🧭 Table of Contents
- [✨ Features](#-features)
- [🧑‍💻 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [🌟 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 👤 User Features
- 🔐 **Sign Up / Login** – Secure JWT-based authentication, with password hashing using **bcrypt**.  
- 🍱 **Browse Food by Category** – Explore various cuisines organized into easy-to-navigate categories.  
- 🔎 **Search** – Instantly find your favorite dishes using the smart search bar.  
- 🛒 **Add to Cart** – Select item quantity and size, and add them to your cart.  
- 💳 **Checkout** – Review your order and complete payment seamlessly.  
- 📜 **Order History** – View previously ordered items in your personal *“My Orders”* section.  

### 🧑‍💼 Admin Features
- 📦 **Order Management** – View, update, and manage orders placed by users.  
- 🍔 **Product Management** – Add, update, or delete food items easily.  
- 👥 **User Management** – Access and manage user accounts efficiently.  

---

## 🧑‍💻 Tech Stack

| Layer | Technology Used |
|--------|----------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Token), bcrypt.js |

---

## 📁 Project Structure


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

🚀 Usage

🧍‍♀️ Sign Up/Login – Create or log in to your account.

🍕 Browse and Search – Explore categories or use the search bar to find dishes.

🛒 Add to Cart – Choose size, quantity, and add to cart.

💰 Checkout – Review and confirm your order.

📦 Order History – Track all your past orders.

🌟 Future Enhancements

📍 Real-Time Order Tracking – View live order progress.

⏰ Scheduled Deliveries – Schedule orders for specific times.

💡 Personalized Recommendations – Get smart suggestions based on history.

🎁 Loyalty Rewards Program – Earn points and enjoy exclusive discounts.

# Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

    Fork the project.
    Create a new branch for your feature (git checkout -b feature/AmazingFeature).
    Commit your changes (git commit -m 'Add some AmazingFeature').
    Push to the branch (git push origin feature/AmazingFeature).
    Open a Pull Request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.



    
