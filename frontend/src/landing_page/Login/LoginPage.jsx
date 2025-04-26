import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginFunctionality = () => {
  return (
    <div className="text-muted border p-5 bg-light ">
      <h1>Login now</h1>
      <LoginForm />
    </div>
  );
};

export default LoginFunctionality;

// SignupForm component
const LoginForm = () => {
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
      window.location.href = "http://localhost:5173/"; // redirect here
    } catch (error) {
      console.log("Error: ", error);
      alert("Failed to submit");
    }
  };

  //  return
  return (
    <form onSubmit={handleSubmit(LoginFormSubmit)}>
      <div className="w-50 border d-grid row-gap-3">
        <div className="col">
          <label className="mx-2">Username: </label>
          <input
            placeholder="Enter username"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && (
            <span role="alert">Required</span>
          )}
        </div>

        <div className="col">
          <label className="mx-2">Password: </label>
          <input
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <span role="alert">Required</span>
          )}
        </div>

        <br />

        <input
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Login..." : "Login"}
        />
      </div>
    </form>
  );
};
