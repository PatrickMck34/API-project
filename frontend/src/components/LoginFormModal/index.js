import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

import { useHistory } from "react-router-dom";

function LoginFormModal() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (password.length < 6) {
      setErrors(["Password must be at least 6 Charecters long"]);
    }
    return dispatch(sessionActions.login({ credential, password }))
    
      .catch(async (res) => {
        const data = await res.json();
        if (password.length >= 6) {
          setErrors(["Invalid Credentials Please Try Again"]);
        }
        if (data && data.errors) setErrors(data.errors);
        if(!errors) {

          history.push("/dashboard")
        }
      });
  };

  return (
    <>
      <h1 className="title text-2xl ">Log In</h1>
      <form onSubmit={handleSubmit} className="h-55 w-[98%] px-4 mt-3 ">
        <ul className="items-center flex justify-center">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul >
        <label className="label ">
          <div className="w-full items-center justify-center flex">

          <input
            className="flex items-center justify-center ml-7 w-96"
            type="text"
            placeholder="Username/Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            />
            </div>
        </label>
        <label className="label mt-2  ">
          <div className="w-full items-center justify-center flex">

          <input
            className=" flex items-center justify-center ml-7 w-96 "
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            </div>
        </label>
        <div className="flex w-full items-center justify-center">

        <button className="w-36 p-3 h-8  text-white/90 mt-4 mr-4  border text-xs shadow-sm shadow-slate-900 border-gray-700 bg-[#514f4de8] rounded-2xl flex justify-around items-center" type="submit">
          Log In
        </button>
        </div>
      </form>
    </>
  );
}

export default LoginFormModal;
