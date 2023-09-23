import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.signup({ username, password })
    )
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h1 className="title text-2xl">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="h-[32em] ml-2 px-4 mt-3 w-[100%]  "
      >
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="label ">
          
        </label>
        <label className="label mt-1 ">
          <input
            className="input mt-5 ml-7"
            placeholder="User Name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        
        <label className="label mt-[1.5em]">
          <input
            className="input ml-7"
            placeholder="password"
            autoComplete="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="label mt-[1.5em]">
          <input
            className="input ml-7"
            placeholder="confirm password"
            autoComplete="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button className="flex button  mt-9  justify-center mx-auto " type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignupFormModal;
