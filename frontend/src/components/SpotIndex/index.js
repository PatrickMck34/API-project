import { useParams} from 'react-router-dom'
import React, {useEffect, useState} from "react"
import "./details.css"
import {useSelector, useDispatch} from 'react-redux'
import CreateReviewForm from '../../components/Reviews/index'
import OpenModalButton from '../OpenModalButton'
import CreateSpotForm from '../Get-Spot'
import UpdateSpotForm from '../UpdateSpot'

import * as reviewsActions from '../../store/reviews'
import * as spotActions from "../../store/spots"
import ReviewCard from '../ReviewCard/ReviewCards'
import * as sessionActions from "../../store/session"

import { useHistory } from 'react-router-dom'
<script src="https://kit.fontawesome.com/d7a09d9013.js" crossorigin="anonymous"></script>
function SpotDetails({spots}) {

    const [isSpots, setIsSpots] = useState(false)
    const dispatch = useDispatch()
    const users = useSelector(state=>state.session.user)
    const num = (window.location.href.length-1)
    const  spotsIdObj = (window.location.href[num])
    const spotsId = Object.values(spotsIdObj)
    // const sspot = useSelector(state=>state.spots.singleSpot[spotsId])
    const [user, setUser] = useState()
    let {reviewId} = useParams()
    const id = parseInt(spotsId)
    let reviews = useSelector(state=>state.reviews)
    const history = useHistory()
    const spotObj = useSelector(state=>state.spots)
    const spot = Object.values(spotObj)


    const Delete=(spotsId)=> {
        dispatch(spotActions.deleteSpots(spotsId)).then(()=>dispatch(spotActions.getSpots()))
        history.push(`/`)
    }
 
  
    
    // const userClass = "features" + (showMenu ? "open" : " hidden");
    
    return(
    <>
    <div className="full">    
              {/* {spot.name === undefined ? ( */}
                 
             
           
                             <h1 className="SpotName">{spotObj.allSpots[spotsId].name}</h1>
                             
                   
                     <div className="spotDetails">
                         <i className="fa-solid fa-star">{spotObj.allSpots[spotsId].avgRating}</i>
                
                <h4 className="detailsLeft">{spotObj.allSpots[spotsId].city}</h4>
                <h4 className="detailsCenter">{spotObj.allSpots[spotsId].state}</h4>
                <h4 className="detailsRight">{spotObj.allSpots[spotsId].country}</h4>
                </div>

           
            

                    <div className="mainImage">
               
                <img className="Image"  src={spotObj.allSpots[spotsId].previewImage} alt=""/>
                    
            
                        
                            <div className="imagediv">
                             <img className="Image2"  src={spotObj.allSpots[spotsId].previewImage} alt=""/>
                             <img className="Image2"  src={spotObj.allSpots[spotsId].previewImage} alt=""/>
                        
                            </div>
                            
                           
               <div className='div2'>
                        <img className="Image2"  src={spotObj.allSpots[spotsId].previewImage} alt=""/>
                       <img className="Image2"  src={spotObj.allSpots[spotsId].previewImage} alt=""/>

                        </div>

                        
                     </div>
                      <div className="detailss">
                        {spotObj.allSpots[spotsId].description}
                        </div> 
                     <div className="reviews">
                     <div className="reviewsb">
                     

                        <div className="ReviewTxt">
                            User Reviews: 
                             <ReviewCard />
        
                             
               </div>
                        
              
             
              
                      </div>
              {(users ) ? (
                  <div className="prices">Price: ${spotObj.allSpots[spotsIdObj].price}
                
                  <OpenModalButton
                  buttonText="Edit Spot" 
                  modalComponent={<UpdateSpotForm />}
                  />
                  <button className="button" onClick={()=> Delete(spotsIdObj)}>
     Delete Spot
          </button>
                       <OpenModalButton
                       buttonText="Create Review"
                       modalComponent={<CreateReviewForm />}
                       />
                     
                     </div>
                  
                  ):(
                      <div>
                        </div>
                      )}
                      </div>
                      </div>
                  </>
    ) 
}
export default SpotDetails