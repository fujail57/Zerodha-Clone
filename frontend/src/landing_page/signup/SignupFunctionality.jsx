import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginPage";

const SignupFunctionality = () => {
  const [SelectedComponent, setSelectedComponent] = useState(() => SignupForm);
  const isLogin = SelectedComponent === LoginForm;

  return (
    <div className="text-muted border ">
      <div>{SelectedComponent && <SelectedComponent />}</div>

      <p className="text-end mx-5 px-5">
        {isLogin ? "Don't have an account?" : "Already have an account?"}

        <span
          onClick={() =>
            setSelectedComponent(() => (isLogin ? SignupForm : LoginForm))
          }
          style={{ cursor: "pointer" }}
          className="text-primary "
        >
          {isLogin ? " Signup" : " Login"}
        </span>
      </p>
    </div>
  );
};

export default SignupFunctionality;
