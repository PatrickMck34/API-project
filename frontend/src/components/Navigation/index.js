import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import CreateSpot from '../Get-Spot/index.js'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  

   let sessionLinks;
  if (sessionUser) {

   
    
  } else {
   sessionLinks = (
      <li>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
          />
        <OpenModalButton
          buttonText="createSpot"
          modalComponent={<CreateSpot />}
        />
      </li>
    );
  } 
  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
   
      </li>
      
      {isLoaded && sessionLinks}
  
       
      
       
      
    </ul>
  );
}

export default Navigation;