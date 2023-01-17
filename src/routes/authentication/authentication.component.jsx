import React from "react";
import SignUpForm from "../../componets/sign-up-form/SignUpForm";
import SignInForm from "../../componets/sign-in-form/SignInForm";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

function Authentication() {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
