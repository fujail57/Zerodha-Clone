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
- 🐳 Dockerized the application using a custom Dockerfile and Docker Compose
- 🐳 Build and pushed images to Docker Hub for consistent deployment

---

## Project Setup

Before starting, make sure you have the following installed:
- Node.js (version 20 or higher)
- npm (comes with Node.js)

### To set up the project:

1. Clone this repository
```bash
git clone https://github.com/fujail57/Zerodha-Clone.git
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

### To set up the project using Docker:

- **You can find the Docker image here:**

  - [fujail57/zerodha_backend](https://hub.docker.com/repository/docker/fujail57/zerodha_backend/general)
  - [fujail57/zerodha_frontend](https://hub.docker.com/repository/docker/fujail57/zerodha_frontend/general)
  - [fujail57/zerodha_dashboard](https://hub.docker.com/repository/docker/fujail57/zerodha_dashboard/general)

1. Check docker is install or not
```bash
docker -v
```

2. Clone this repository
```bash
git clone https://github.com/fujail57/Zerodha-Clone.git
cd [repository-name]
```

3. Start the server using docker
```bash
docker compose up
```

4. Application should be run on this URL

- Backend:
```bash
http://localhost:5173/
```

- Frontend:
```bash
http://localhost:5173/

```
- Dashboard:
```bash
http://localhost:5174/
```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use) and after logedIn, redirect to `http://localhost:5174` (dashboard).

---

### 📬 Contact
Feel free to reach out or connect:

LinkedIn: [fujail57](https://www.linkedin.com/in/fujail57/)
