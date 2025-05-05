import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";
import { useCookies } from "react-cookie";
import LoadingLayout from "./LoadingLayout";

const ProtectedRoute = ({ children }) => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const verify = async () => {
      // if (!cookies.token) {
      //   // setCheckingAuth(false); // ✅ fix: prevent infinite loading
      //   // window.location.href = "http://localhost:5173/signup";
      //   // console.log(cookies.token)
      //   return;
      // }
      try {
        await axiosInstance.get("/");
        setIsAuthenticated(true);
        setCheckingAuth(false);
      } catch (err) {
        console.log("Token verification failed ", err);
        removeCookie("token");
        window.location.href = "http://localhost:5174/signup";
      } finally {
        setCheckingAuth(false);
      }
    };

    verify();
  }, [cookies.token, removeCookie]);

  if (checkingAuth) return <LoadingLayout />; // or spinner
  return isAuthenticated ? children : null;

  // return checkingAuth ? <div>Loading...</div> : isAuthenticated ? children : null;
};

export default ProtectedRoute;
