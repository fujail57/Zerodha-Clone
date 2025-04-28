import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./axiosInstance";

const ProtectedRoute = ({ children }) => {
  //   const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/auth")
      .then((res) => {
        setCheckingAuth(false);
      })
      .catch((err) => {
        console.error(err);
        // navigate("/login"); // redirect to login if not authenticated
        window.location.href = "http://localhost:5174/";
      });
  }, []);

  if (checkingAuth) {
    return <div className="text-success">Loading...</div>; // or spinner
  }

  return children;
};

export default ProtectedRoute;

// :::::::::::

// dashboard/src/components/ProtectedRoute.jsx

// import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { axiosInstance } from "./axiosInstance";

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null); // initially unknown

//   useEffect(() => {
//     axiosInstance
//       .get("/auth")
//       .then((res) => {
//         if (res.data.authenticated) {
//           setIsAuthenticated(true);
//         } else {
//           setIsAuthenticated(false);
//         }
//       })
//       .catch((err) => {
//         setIsAuthenticated(false);
//       });
//   }, []);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // or a nice spinner
//   }

//   return isAuthenticated
//     ? children
//     : (window.location.href = "http://localhost:5174/");
//   // return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// export default ProtectedRoute;
