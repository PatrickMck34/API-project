import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import OpenModalButton from "../OpenModalButton";
import CreateSpotForm from "../Get-Spot";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import UserMenu from "./userMenu";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spots.allspots);

  return (
    <>
      <div className="flex justify-between items-center flex-row ">
        <NavLink exact to="/">
          <img
            src="https://i.postimg.cc/GtWHjN5r/Untitled.png"
            alt=""
          />
        </NavLink>

        <Search />

        <UserMenu />
      </div>

      {/* <ProfileButton /> */}
    </>
  );
}

export default Navigation;
