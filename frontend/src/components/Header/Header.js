import React from 'react'
import ProfileButton from '../Navigation/ProfileButton'
import './Header.css'
import {useSelector} from 'react-redux'


function Header() {
    const sessionUser = useSelector(state => state.session.user);
    return(
        
     
       
          
        <div className='header_right'>
        <img className="header_right"
            src="https://i.postimg.cc/zGhXX5JQ/Go-therelogo-Png.png"
            alt=""
            />
            <ProfileButton user={sessionUser} /> 
        </div>
            
   
    )
}
export default Header