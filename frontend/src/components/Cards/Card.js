import { csrfFetch } from '../../store/csrf'
import React from 'react'
import './Card.css' 
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import * as spotsActions from "../../store/spots"
import { useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom'



function Card() {
  const dispatch=useDispatch()
  const spotsObj = useSelector(state=> state.spots.allSpots)
  const spots = Object.values(spotsObj) 

  
const single = (spotId) => {
 dispatch(spotsActions.getSpot(spotId))
}
  
  
  return(
    
    spots.map((spot) => {
      
      
      return(
        <>
         
<div key={spot.id + "D"} className="Homecards">

            <Link 
            key={spot.id + "link"}  to={`/spots/${spot.id}`} onClick={single(spot.id)}>

              {spot.previewImage === "" ? (
                <h1>loading . . .</h1>
                ) : (
                  <img className="card"  src={spot.previewImage} alt={spot.previewImage}/>
                  ) }
                </Link>
    <div ley={spot.id} className="details">
       <h4 key={spot.id+"h"}>{spot.city}, {spot.state}</h4> 
       <i className="fa-solid fa-star">{spot.avgRating}</i> 
    </div>
        <h4 className="details" key={spot.id+"h3"}>${spot.price} night</h4>
                
                </div>
            
          
            
     
            </>
        
        )
    }
 )   


)}

export default Card