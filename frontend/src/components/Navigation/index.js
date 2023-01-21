import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
   
   <>
        <NavLink exact to="/"><div className='header'>
        <img className="header_icon"
            src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png"
            alt=""
            />
            </div>
            </NavLink>
       
            
        <div className='header_user'>
            <ProfileButton user={sessionUser} /> 
        </div>
            
   
     
  
  
  {isLoaded && (
    <li>
          {/* <ProfileButton user={sessionUser} /> */}
        </li>
      )}
      </>
  );
}

export default Navigation;