import React from 'react'
import ProfileButton from '../Navigation/ProfileButton'
import './Header.css'
import {useSelector} from 'react-redux'
import OpenModalButton from '../OpenModalButton'
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem'

function Header() {
    const sessionUser = useSelector(state => state.session.user);
    return(
        
        <div className='header'>
        <img className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt=""
        />
        <div className='header_center'>
            
        </div>
        <div className='header_right'>
            <p>Airbnb your home</p>
            <ProfileButton user={sessionUser} /> 
        </div> 
   
        </div>
    )
}
export default Header