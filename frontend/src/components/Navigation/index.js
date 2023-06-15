import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from '../OpenModalButton';
import CreateSpotForm from '../Get-Spot';
import SearchIcon from '@mui/icons-material/Search';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const spots = useSelector(state=>state.spots.allspots)

  return (
    
    <>
    {/* <div className="header_r">
        <NavLink exact to="/">
        <img className="header_icon"
            src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png"
            alt=""
            />
          
            </NavLink>
            <div className="header-center " onClick={()=> window.alert("Coming soon!")}>
            Anywhere | Any Week | Add Guest
                <SearchIcon />
            </div>
       <div  className="create" >
       <OpenModalButton className="creation"
       
                  buttonText="Go-There Your Home"
                  modalComponent={<CreateSpotForm spots={spots}/>}/>
            
                
            </div> 
        <div className='header_user'>
            <ProfileButton user={sessionUser} /> 
        </div>
       </div>
             */}
   
     <div className="Header flex justify-between">

      <div className="header-left">
      <NavLink exact to="/">
        <img className="header-icon"
            src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png"
            alt=""
            />
          
            </NavLink>

          </div>

        <div className="header-center w-full justify-center mt-4 mx-8 fixed ml-[40%]" onClick={()=> window.alert("Coming soon!")}>
        Anywhere | Any Week | Add Guest
                <SearchIcon />
        </div>

          <div className=" mx-72 fixed ml-[85%] mt-[-2em] ">
            <ProfileButton />


      </div>
            

     </div>
  

      
      </>
  );
}

export default Navigation;