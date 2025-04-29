# Zerodha Clone – Full-Stack Trading Platform (MERN Stack)

Developed a full-featured Zerodha clone web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform enables users to securely sign up or log in, access a trading dashboard, manage orders, monitor account summaries, and track market positions in real time.

Authentication and authorization are implemented using JSON Web Tokens (JWT) and bcrypt for secure credential handling. The frontend is built with React.js and styled using Bootstrap, ensuring a clean, responsive, and user-friendly experience. The backend follows the MVC architecture, using Express.js to handle API logic and MongoDB for scalable data storage.

## 🔧 Tech Stack

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js (MVC Architecture)
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT), bcrypt

---

## ✨ Features

- 🔐 Secure user authentication and authorization (JWT + bcrypt)
- 📊 Interactive user dashboard with:
  - Trading summary
  - Active positions
  - Order history
- 💹 Functional **Buy** and **Sell** order system
- 🎨 Responsive and modular UI with React.js and Bootstrap
- 🌐 RESTful API backend using Node.js and Express
- 🗃️ MongoDB for scalable and flexible data storage

---

## Project Setup

Before starting, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

To set up the project:

1. Clone this repository
```bash
git clone [repository-url]
cd [repository-name]
```

2. Change directory and Install dependencies then Start the development server

a. Frontend
```bash
cd frontend
npm install
npm run dev
```

b. Dashboard
```bash
cd dashboard
npm install
npm run dev
```

c. Backend
```bash
cd backend
npm install
# Add your .env file with MongoURI and JWT secret
npm start
```

The application should now be running on `http://localhost:5174` (or another port if 5174 is in use) and after logedIn, redirect to `http://localhost:5173` (dashboard).

---

📬 Contact
Feel free to reach out or connect:

LinkedIn: fujail57
