import React, { useState, useEffect} from 'react'
import './Home.css'
import Card from "../Cards/Card"
import Header from '../Header/Header'
import Navigation from '../Navigation'
import {useSelector, useDispatch} from 'react-redux'
import DemoUser from '../DemoUser/DemoUser'
import * as sessionActions from "../../store/session"
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem'
import { Link } from 'react-router-dom'
import * as spotActions from "../../store/spots"
import * as reviewActions from "../../store/reviews"

function Home({stars}) {
    const dispatch = useDispatch()
    const spotsObj = useSelector(state=> state.spots.allSpots)
    const reviewsObj = useSelector(state=>state.reviews.allReviews)
    const reviews = Object.values(reviewsObj)
    const spots = Object.values(spotsObj)
    const [averageStars, setAverageStars] = useState(0)
    
const id = spots.id
useEffect(() => {
dispatch(spotActions.getSpots())
}, [spots.allSpots])

const getAvg = (id) =>{
    
}




return(
    <div className="homeCards">
           
        <div className='home'>
          
           
               
     
            <div key={id} className='home_section'>
           {spots.map((spot)=>{
               let count = spot.avgRating
            
               
               return(
                <>
                 
        <div key={spot.id + "D"} className="Homecards">
        
                    <Link 
                    key={spot.id + "link"}  to={`/spots/${spot.id}`}>
        
                      {spot.previewImage === "" ? (
                        <h1>loading . . .</h1>
                        ) : (
                          <img className="card"  src={spot.previewImage} alt={spot.previewImage}/>
                          ) }
                        </Link>
            <div ley={spot.id} className="details">
               <h4 key={spot.id+"h"}>{spot.city}, {spot.state}</h4> 
               { reviews.map(review=>{
                         count+=  review.stars
                        
                        } ,{})
                    }
                         <i className="fa-solid fa-star">{count/(reviews.length)}</i>
            </div>
                <h4 className="details" key={spot.id+"h3"}>${spot.price} night</h4>
                        
                        </div>
                    
                  
                  
             
                    </>
                
                )
            }
         )   
        
        
        

           }
            
                
        </div>
         </div>
        </div>
    )
}
export default Home