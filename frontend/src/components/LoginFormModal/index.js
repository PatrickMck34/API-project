import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (password.length < 6) {
      setErrors(["Password must be at least 6 Charecters long"]);
    }
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (password.length >= 6) {
          setErrors(["Invalid Credentials Please Try Again"]);
        }
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h1 className="title text-2xl ">Log In</h1>
      <form onSubmit={handleSubmit} className="h-55 w-[98%] px-4 mt-3 ">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="label ">
          <input
            className="input ml-7"
            type="text"
            placeholder="Username/Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="label mt-2  ">
          <input
            className="input ml-7 "
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="button mt-8" type="submit">
          Log In
        </button>
      </form>
    </>
  );
}

export default LoginFormModal;
