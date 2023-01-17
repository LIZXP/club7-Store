import React from "react";
import SignUpForm from "../../componets/sign-up-form/SignUpForm";
import SignInForm from "../../componets/sign-in-form/SignInForm";
import "./auth.styles.scss";

function Authentication() {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
