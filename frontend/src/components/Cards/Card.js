import React from 'react'
import './Card.css' 
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import * as spotActions from "../../store/spots"
function Card() {
//    const dispatch=useDispatch()
const spotsObj = useSelector(state=> state.spots.allSpots)
const spots = Object.values(spotsObj) 
if(spots){
return(
    
    spots.map((spot) => {
        return(
            <>
         

<div key={"d"+spot.id}>

            <Link 
            key={spot.id+"L"}to={`/spots/${spot.id}`}>
                {spot.previewImage && 
         <img className="card"  src={spot.previewImage} alt=""/>
    }
       <h2 key={spot.id+"h"}>{spot.name}</h2>
        <h4 key={spot.id+'h4'}>{spot.description}</h4>
        <h3 key={spot.id+"h3"}>{spot.price}</h3>
                </Link>
                
                </div>
            
          
            
     
            </>
        
        )
    }
 )   

  
)}
}
export default Card