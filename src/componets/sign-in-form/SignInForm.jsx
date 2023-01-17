import React from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./signin.styles.scss";
import { useState } from "react";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formField, setFormFields] = useState(defaultFormFields);
  const { email, password } = formField;
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formField, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetForm();
    } catch (error) {}
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          autoComplete="new-password"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          onCopy={(e) => {
            e.preventDefault();
            return false;
          }}
          autoComplete="new-password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
