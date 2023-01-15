import React from "react";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formField, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;
  console.log("====================================");
  console.log(formField);
  console.log("====================================");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formField, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          autoComplete="new-password"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          autoComplete="new-password"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
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
        <label>Confirmed Password</label>
        <input
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
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
