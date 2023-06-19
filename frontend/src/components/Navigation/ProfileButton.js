import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalButton from ".//OpenModalMenuItem.js";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom";
import DemoUser from "../DemoUser/DemoUser";
import "./Navigation.css";
import { useSelector } from "react-redux";
import * as sesstionActions from "../../store/session";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const user = useSelector((state) => state.session.user);

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

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
  };
  const Demo = (e) => {
    e.preventDefault();
    dispatch(sessionActions.Demo());
    return closeMenu();
  };
  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <div className="menu">
        <button onClick={openMenu} className="menu">
          <i className="fa-solid fa-bars"></i>
          <i className="fas fa-user-circle" />
        </button>
      </div>

      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div className="logged">
            User: {user.username}, Name: {user.firstName} {user.lastName}
            {user.email}
            <button className="button " onClick={logout}>
              Log Out
            </button>
          </div>
        ) : (
          <>
            <div className="ho">
              <div className="demoButton">
                <div className="hovers">
                  <OpenModalButton
                    itemText="Log In"
                    onItemClick={closeMenu}
                    modalComponent={<LoginFormModal />}
                  />
                  <p>
                    <OpenModalButton
                      itemText="Sign Up"
                      onItemClick={closeMenu}
                      modalComponent={<SignupFormModal />}
                    />
                  </p>

                  <button className="Demo mt-4 w-[4em]" onClick={Demo}>
                    Demo
                  </button>
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
