# Zerodha Clone – Full-Stack Trading Platform (MERN Stack)

Developed a full-featured Zerodha clone web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to securely sign up or log in, view their trading dashboard, manage orders, monitor summaries, and track positions in real time. Authentication and authorization are implemented using JSON Web Tokens (JWT) and bcrypt for secure password hashing. The user interface, designed with React.js and Bootstrap, ensures a clean and responsive experience. Core functionalities include placing buy/sell orders, viewing active positions, and analyzing order summaries. The backend is built following the MVC architecture, with MongoDB handling data persistence and Express.js managing API routes and logic.
### Key Features:
- Secure user authentication (JWT + bcrypt)

- User dashboard with trading summary, positions, and order management

- Functional buy and sell order system

- Responsive and modular React.js frontend with Bootstrap styling

- RESTful API backend with Node.js and Express.js

- MongoDB for scalable and flexible data storage

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
npm start
```

The application should now be running on `http://localhost:5174` (or another port if 5174 is in use) and after logedIn, redirect to `http://localhost:5173` (dashboard).
