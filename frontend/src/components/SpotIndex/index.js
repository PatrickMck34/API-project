import { useParams} from 'react-router-dom'
import React, {useEffect, useState} from "react"
import "./details.css"
import {useSelector, useDispatch} from 'react-redux'
import CreateReviewForm from '../../components/Reviews/index'
import OpenModalButton from '../OpenModalButton'
import CreateSpotForm from '../Get-Spot'
import UpdateSpotForm from '../UpdateSpot'
import Delete from '../DeleteSpot/deleteSpot'
import * as reviewsActions from '../../store/reviews'
import * as spotActions from "../../store/spots"
import ReviewCard from '../ReviewCard/ReviewCards'
import * as sessionActions from "../../store/session"

import { useHistory } from 'react-router-dom'
<script src="https://kit.fontawesome.com/d7a09d9013.js" crossorigin="anonymous"></script>
function SpotDetails() {

    const [isSpots, setIsSpots] = useState(false)
    const dispatch = useDispatch()
    const users = useSelector(state=>state.session.user)
    const num = (window.location.href.length - 1)
    const  spotsId = (window.location.href[num])
    const spot = useSelector(state=>state.spots.allSpots[spotsId])
    const [user, setUser] = useState()

    let reviewId = useParams()
    const spots = useSelector(state=>state.spots.allSpots)
    
    let reviews = useSelector(state=>state.reviews.allReviews)
    const history = useHistory()

    const Delete=(spotsId)=> {
        dispatch(spotActions.deleteSpots(spotsId))
        history.push(`/`)
    }
    useEffect(() => {
            if(spot){
        
                dispatch(spotActions.getSpots())
                }else{
                        console.log("loading")
                    }
                
                        }, [dispatch])
                
                useEffect(() => {
            
            dispatch(spotActions.getSpots())
        }, [dispatch])
  
    
    // const userClass = "features" + (showMenu ? "open" : " hidden");
    
    return(
    <>
    <div className="full">    
              {/* {spot.name === undefined ? ( */}
                 
             
           
                             <h1 className="SpotName">{spot.name}</h1>
                             
                   
                     <div className="spotDetails">
                         <i className="fa-solid fa-star">{spot.avgRating}</i>
                
                <h4 className="detailsLeft">{spot.city}</h4>
                <h4 className="detailsCenter">{spot.state}</h4>
                <h4 className="detailsRight">{spot.country}</h4>
                </div>

           
            

                    <div className="mainImage">
               
                <img className="Image"  src={spot.previewImage} alt=""/>
                    
            
                        
                            <div className="imagediv">
                             <img className="Image2"  src={spot.previewImage} alt=""/>
                             <img className="Image2"  src={spot.previewImage} alt=""/>
                        
                            </div>
                            
                           
               <div className='div2'>
                        <img className="Image2"  src={spot.previewImage} alt=""/>
                       <img className="Image2"  src={spot.previewImage} alt=""/>

                        </div>

                        
                     </div>
                      <p>
                        {spot.description}
                        </p> 
                     <div className="reviews">
                     <div className="reviewsb">
                     

                        <div className="ReviewTxt">
                            User Reviews: 
                             <ReviewCard />
        
                  <div className="buttons">

                        </div>
                             
               </div>
                        
              
             
              
                      </div>
              {(users !== null) ? (
                  <div>
                      <h5 className="price">Price: ${spot.price}
                  <OpenModalButton 
                  buttonText="Create Spot"
                  modalComponent={<CreateSpotForm spots={spots}/>}
                  />
                  <OpenModalButton
                  buttonText="Edit Spot" 
                  modalComponent={<UpdateSpotForm spots={spots}/>}
                  />
                  <button className="button" onClick={()=> Delete(spotsId)}>
     Delete Spot
          </button>
                       <OpenModalButton
                       buttonText="Create Review"
                       modalComponent={<CreateReviewForm />}
                       />
                       </h5>
                  </div>
                  
              ):(
                  <div></div>
                  )}
                       </div>
          </div>
                  </>
    ) 
}
export default SpotDetails