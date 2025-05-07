import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
// import "./signup.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const LoginFormSubmit = async (data) => {
    // backend data

    try {
      await axios.post("http://localhost:3002/auth/login", data, {
        withCredentials: true,
      });
      console.log("Login successfully: ", data);
      alert("Login successfully");
      reset(); // clear form after submition
      setTimeout(() => {
        window.location.href = "http://localhost:5174/"; // redirect here (dashboard)
      }, 1000);
    } catch (error) {
      console.log("Error: ", error);
      alert("Login failed");
    }
  };

  //  return statement
  return (
    <form onSubmit={handleSubmit(LoginFormSubmit)}>
      <div className="text-muted">
        <section>
          <h1>Login now</h1>
          <h6 className="text-muted my-3">
            Or track your existing application
          </h6>
        </section>
        <div className="">
          <input
            placeholder="Enter username"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
            className={errors.username ? "input-error" : "input-normal"}
          />
        </div>

        <div className="">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            className={errors.password ? "input-error" : "input-normal"}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={isSubmitting}
            className="btn eye-btn position-absolute"
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>

        <div>
          <input
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Login..." : "Login"}
          />
        </div>

        <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
      </div>
    </form>
  );
};

export default LoginForm;
