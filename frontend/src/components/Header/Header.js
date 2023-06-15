import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Header.css"
import OpenModalButton from '../OpenModalButton';
import CreateSpotForm from '../Get-Spot'; 
import spots from '../../store/spots';
import LoginFormModal from '../LoginFormModal';
import ProfileButton from '../Navigation/ProfileButton';


function Header() {
    return (
        <div className="header ">
            <img className="header-icon"
                src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png" alt="logo" />

            <div className="header-center " onClick={()=> window.alert("Coming soon!")}>
            Anywhere | Any Week | Add Guest
                <SearchIcon />
            </div>
                Go-there Your Home    
            <div className="flex flex-col justify-between w-fit h-fit m-auto md:min-w-[40%] ">
          
                <div className="flex  h-5 w-7 header-right mt-[-4] fixed">

               
                <ProfileButton className="absolute"/>
                </div>

            </div>
               
            
           
        <div className='header_user'>
           
            </div>
        </div>
    );
}
export default Header;