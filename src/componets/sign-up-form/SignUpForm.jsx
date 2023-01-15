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

  const handleChange = (e) => {
    setFormFields();
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onpaste="return false;"
          onCopy="return false"
          autoComplete="new-password"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onpaste="return false;"
          onCopy="return false"
          autoComplete="new-password"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onpaste="return false;"
          onCopy="return false"
          autoComplete="new-password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <label>Confirmed Password</label>
        <input
          type="password"
          required
          onpaste="return false;"
          onCopy="return false"
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
