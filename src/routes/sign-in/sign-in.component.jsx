import React from "react";
import SignUpForm from "../../componets/sign-up-form/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Signin With Google</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
