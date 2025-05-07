import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./signup.css";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const SignupFormSubmit = async (data) => {
    // backend data
    try {
      await axios.post("http://localhost:3002/auth/signup", data, {
        withCredentials: true,
      });
      // console.log("Signup successfully: ", data);
      alert("Signup successfully");
      reset(); // clear form after submition
    } catch (error) {
      console.log("Error: ", error);
      alert("Failed to Signup");
    }
  };

  //  return
  return (
    <form onSubmit={handleSubmit(SignupFormSubmit)}>
      <div className="">
        <section>
          <h1>Signup now</h1>
          <h6 className="text-muted my-3">
            Or track your existing application
          </h6>
        </section>
        <div>
          <input
            placeholder="Enter Name"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            className={errors.name ? "input-error" : "input-normal"}
          />
        </div>

        <div className="">
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            className={errors.email ? "input-error" : "input-normal"}
          />
        </div>

        <div className="">
          <input
            placeholder="Create username"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
            className={errors.username ? "input-error" : "input-normal"}
          />
        </div>

        <div className="">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            className={errors.password ? "input-error" : "input-normal"}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={isSubmitting}
            className="btn position-absolute eye-btn"
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>

        <div>
          <input
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Signup..." : "Signup"}
          />
        </div>
        <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
      </div>
    </form>
  );
};

export default SignupForm;
