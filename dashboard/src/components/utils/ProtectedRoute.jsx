import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./axiosInstance";

const ProtectedRoute = ({ children }) => {
  //   const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/")
      .then((res) => {
        setCheckingAuth(false);
      })
      .catch((err) => {
        console.error(err);
        setCheckingAuth(true);
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

// import { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { axiosInstance } from "./axiosInstance";

// const ProtectedRoute = ({ children }) => {
//   const [cookies, removeCookie] = useCookies(["token"]);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const verify = async () => {
//       // If no token, redirect immediately
//       if (!cookies.token) {
//         window.location.href = "http://localhost:5174/";
//         return;
//       }

//       try {
//         const { data } = await axios.get(
//           "http://localhost:3002/auth", // your backend verify route
//           {},
//           { withCredentials: true }
//         );

//         if (data.status) {
//           setIsAuthenticated(true);
//         } else {
//           removeCookie("token");
//           window.location.href = "http://localhost:5174/";
//           return;
//         }
//       } catch (err) {
//         console.error("Token verification failed:", err);
//         removeCookie("token");
//         window.location.href = "http://localhost:5174/";
//         return;
//       } finally {
//         setCheckingAuth(false);
//       }
//     };

//     verify();
//   }, [cookies, removeCookie]);

//   if (checkingAuth) return <div>Loading...</div>;

//   return isAuthenticated ? children : null;
// };

// export default ProtectedRoute;
