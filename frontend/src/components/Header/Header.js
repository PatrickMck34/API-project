import React from 'react'
import ProfileButton from '../Navigation/ProfileButton'
import './Header.css'

function Header() {
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
        <ProfileButton />
        </div>
        </div>
    )
}
export default Header