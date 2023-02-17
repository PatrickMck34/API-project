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
import { useContext } from 'react'
import { AvgStarContext } from '../../context/averageContext'

function Home({children}) {
    const Avg = useContext(AvgStarContext)
    const dispatch = useDispatch()
    const spotsObj = useSelector(state=> state.spots.allSpots)
    const reviewsObj = useSelector(state=>state.reviews.allReviews)
    const reviews = Object.values(reviewsObj)
    const spots = Object.values(spotsObj)
    const avg = useSelector(state=>state.spots.avgRating)
 
    const [star, setStar] = useState([])
const id = spots.id
useEffect(() => {
dispatch(spotActions.getSpots())
}, [spots.allSpots])
console.log(star)
const getAvg  =(spot) =>{
    let result

    reviews.map(review=>{
        
              spot+=  review.stars
             console.log(spot)
               result = spot / (reviews.length)
             
             } ,{})
    return result
}




return(
    <div className="homeCards">
 
        <div className='home'>
          
           
               
     
            <div key={id} className='home_section'>
           {spots.map((spot)=>{
               let id = parseInt(spot.id)
            
               
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
                  
                         <i className="fa-solid fa-star">{spot.avgRating}</i>
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