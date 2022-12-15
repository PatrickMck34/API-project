import React from 'react'
import './Card.css' 
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function Card() {
const spotsObj = useSelector(state=> state.spots.allSpots)
const spots = Object.values(spotsObj) 
return(
    
    spots.map((spot) => {
        return(
            
            <div className="card_image">
                <Link to="/spots/1">Details</Link>
         <img className="card"  src={spot.previewImage} alt=""/>
        <h2 >{spot.name}</h2>
        <h4 >{spot.description}</h4>
        <h3 >{spot.price}</h3>
            
                        </div>
        
        
        )
    }
 )   

  
)}

export default Card