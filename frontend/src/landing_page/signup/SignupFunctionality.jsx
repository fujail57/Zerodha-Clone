import React from "react";
import PrimaryButton from "../../component/PrimaryButton";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignupFunctionality = () => {
  return (
    <div className="text-muted border p-5 bg-light ">
      <h1>Signup now</h1>
      <h4>Or track your existing application</h4>
      <div>
        <SignupForm />
      </div>

      {/* <PrimaryButton name="Signup now" /> */}
      <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
    </div>
  );
};

export default SignupFunctionality;

// SignupForm component
const SignupForm = () => {
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
      console.log("Signup successfully: ", data);
      alert("Submitted successfully");
      reset(); // clear form after submition
    } catch (error) {
      console.log("Error: ", error);
      alert("Failed to submit");
    }
  };

  //  return
  return (
    <form onSubmit={handleSubmit(SignupFormSubmit)}>
      <div className="w-50 border d-grid row-gap-3">
        <div>
          <label className="mx-2">Name: </label>
          <input
            placeholder="Enter Name"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <span role="alert">Required</span>
          )}
        </div>

        <div className="col">
          <label className="mx-2">Email: </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <span role="alert">Required</span>
          )}
        </div>

        <div className="col">
          <label className="mx-2">Username: </label>
          <input
            placeholder="Create username"
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
            placeholder="Create password"
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
          value={isSubmitting ? "Signup..." : "Signup"}
        />
      </div>
    </form>
  );
};
