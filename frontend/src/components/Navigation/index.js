import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from '../OpenModalButton';
import CreateSpotForm from '../Get-Spot';
function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    
    <>
    <div className="header_r">
        <NavLink exact to="/">
        <img className="header_icon"
            src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png"
            alt=""
            />
          
            </NavLink>
       <div  className="create">
       <OpenModalButton className="creation"
                  buttonText="Go-There Youre Home"
                  modalComponent={<CreateSpotForm />}/>

                
            </div> 
        <div className='header_user'>
            <ProfileButton user={sessionUser} /> 
        </div>
       </div>
            
   
     
  

      
      </>
  );
}

export default Navigation;