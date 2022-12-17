import React from 'react'
import './Card.css' 
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import * as spotActions from "../../store/spots"
function Card() {
   const dispatch=useDispatch()
const spotsObj = useSelector(state=> state.spots.allSpots)
const spots = Object.values(spotsObj) 

return(
    
    spots.map((spot) => {
        return(
            <>
            <Link to={`/spots/${spot.id}`}>
         <img className="card"  src={spot.previewImage} alt=""/>
        <h2 >{spot.name}</h2>
        <h4 >{spot.description}</h4>
        <h3 >{spot.price}</h3>
                </Link>
                
            
            
     
            </>
        
        )
    }
 )   

  
)}

export default Card