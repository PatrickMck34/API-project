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
            src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png"
            alt=""
            />
        <div className='header_center'>
            </div> 
            
        <div className='header_right'>
            <ProfileButton user={sessionUser} /> 
        </div>
            
   
        </div>
    )
}
export default Header