import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalButton from './/OpenModalMenuItem.js';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { NavLink } from "react-router-dom";
import DemoUser from "../DemoUser/DemoUser";
import "./Navigation.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
   
  };
  const Demo = (e) => {
    e.preventDefault();
    dispatch(sessionActions.Demo());
  }
  const ulClassName = "profile-dropdown" + (showMenu ? "open" : " hidden");

  return (
    <>

       <div className="menu">

      <button onClick={openMenu} className={"menu"}>
      <i  className="fa-solid fa-bars"></i>
        <i className="fas fa-user-circle" />
      </button>
       </div>
    
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div className="logged">
          User: {user.username},
           Name: {user.firstName} {user.lastName}
            {user.email}
            
              <button onClick={logout}>Log Out</button>
       
          </div>
        ) : (
          <>
          <div className='ho'>

            <div className="demoButton">
          <div key={"login"} className={"hover"}>
            <OpenModalButton
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}

              />
            
            <OpenModalButton
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
              />

              <button className="Demo" onClick={Demo}>Demo User</button>
            </div>
            </div>
        </div>
          </>
        )}
      </div>
    </>
  );
}

export default ProfileButton;