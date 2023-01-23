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
    const  spotsIdObj = (window.location.href[num])
    const spotsId = Object.values(spotsIdObj)
    // const sspot = useSelector(state=>state.spots.singleSpot[spotsId])
    const [user, setUser] = useState()
    const {spotsIds} = useParams()
    let {reviewId} = useParams()
    const spots = useSelector(state=>state.spots.allSpots)
    const id = parseInt(spotsIdObj)
    let reviews = useSelector(state=>state.reviews.allReviews)
    const history = useHistory()
    const spotObj = useSelector(state=>state.spots.allSpots)
    const spot = Object.values(spotObj)
   
    console.log(spotObj[id].name)
    
    const Delete=(spotsId)=> {
        dispatch(spotActions.deleteSpots(spotsId))
        history.push(`/`)
    }
    useEffect(() => {
       
        
                dispatch(spotActions.getSpot(spotsId))
             
                  
                
                        }, [dispatch, spots])
                console.log(isSpots)
                useEffect(() => {
            
            dispatch(spotActions.getSpot(spotsId))
        }, [dispatch])
  
    
    // const userClass = "features" + (showMenu ? "open" : " hidden");
    
    return(
    <>
    <div className="full">    
              {/* {spot.name === undefined ? ( */}
                 
             
           
                             <h1 className="SpotName">{spotObj[id].name}</h1>
                             
                   
                     <div className="spotDetails">
                         <i className="fa-solid fa-star">{spotObj[id].avgRating}</i>
                
                <h4 className="detailsLeft">{spotObj[id].city}</h4>
                <h4 className="detailsCenter">{spotObj[id].state}</h4>
                <h4 className="detailsRight">{spotObj[id].country}</h4>
                </div>

           
            

                    <div className="mainImage">
               
                <img className="Image"  src={spotObj[id].previewImage} alt=""/>
                    
            
                        
                            <div className="imagediv">
                             <img className="Image2"  src={spotObj[id].previewImage} alt=""/>
                             <img className="Image2"  src={spotObj[id].previewImage} alt=""/>
                        
                            </div>
                            
                           
               <div className='div2'>
                        <img className="Image2"  src={spotObj[id].previewImage} alt=""/>
                       <img className="Image2"  src={spotObj[id].previewImage} alt=""/>

                        </div>

                        
                     </div>
                      <p>
                        {spotObj[id].description}
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
                      <h5 className="price">Price: ${spotObj[id].price}
                  <OpenModalButton 
                  buttonText="Create Spot"
                  modalComponent={<CreateSpotForm />}
                  />
                  <OpenModalButton
                  buttonText="Edit Spot" 
                  modalComponent={<UpdateSpotForm />}
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