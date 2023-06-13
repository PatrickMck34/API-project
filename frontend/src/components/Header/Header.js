import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Header.css"
import OpenModalButton from '../OpenModalButton';
import CreateSpotForm from '../Get-Spot'; 
import spots from '../../store/spots';


function Header() {
    return (
        <div className="header">
            <img className="header-icon"
                src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png" alt="logo" />

            <div className="header-center">
                <input type="text"  placeholder="Search" />
                <SearchIcon />
            </div>
            <div className='header-right'>
            <OpenModalButton className="header-right"
       
       buttonText="Go-There Your Home"
       modalComponent={<CreateSpotForm spots={spots}/>}/>
                
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    );
}
export default Header;