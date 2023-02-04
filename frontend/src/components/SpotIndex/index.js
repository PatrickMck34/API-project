import { useParams} from 'react-router-dom'
import React, {useEffect, useState} from "react"
import "./details.css"
import {useSelector, useDispatch} from 'react-redux'
import CreateReviewForm from '../../components/Reviews/index'
import OpenModalButton from '../OpenModalButton'

import UpdateSpotForm from '../UpdateSpot'

import * as spotActions from "../../store/spots"
import ReviewCard from '../ReviewCard/ReviewCards'


import { useHistory } from 'react-router-dom'
<script src="https://kit.fontawesome.com/d7a09d9013.js" crossorigin="anonymous"></script>
function SpotDetails({spots}) {
    
   
    const dispatch = useDispatch()
    const users = useSelector(state=>state.session.user)
   
    
    // const sspot = useSelector(state=>state.spots.singleSpot[spotID])
  
  
 
//    const spots = useSelector(state=>state.spots)
    const history = useHistory()
    const spotObj = useSelector(state=>state.spots)
   const [render, setRender] = useState(false)
    const spotId = useParams()
    const spotID = spotId.spotsid

    useEffect(() => {
       if(spots.allSpots[spotID] === undefined){
       dispatch(spotActions.getSpots())
        setRender(true)
       }else{
        dispatch(spotActions.getSpots())
        setRender(false)
       }
     }, [render, spotID])

     useEffect(() => {
        if(spots.allSpots[spotID] === undefined){
        dispatch(spotActions.getSpots())
         setRender(true)
        }else{
         dispatch(spotActions.getSpots())
         setRender(false)
        }
      }, [])


     
     const Delete=(spotID)=> {
         
         
         dispatch(spotActions.deleteSpots(spotID)).then(()=>dispatch(spotActions.getSpots()))
         history.push(`/`)
     }
        return(
            <>
            {spots.allSpots[spotID] === undefined ? (
            <div></div>
            ):(
            
            <div className="full">    
             
                 
             
           
                             <h1 className="SpotName">{spots.allSpots[spotID].name}</h1>
                             
                   
                     <div className="spotDetails">
                         <i className="fa-solid fa-star">{spots.allSpots[spotID].avgRating}</i>
                
                <h4 className="detailsLeft">{spots.allSpots[spotID].city}</h4>
                <h4 className="detailsCenter">{spots.allSpots[spotID].state}</h4>
                <h4 className="detailsRight">{spots.allSpots[spotID].country}</h4>
                </div>

           
            

                    <div className="mainImage">
               
                <img className="Image"  src={spots.allSpots[spotID].previewImage} alt=""/>
                    
            
                        
                            <div className="imagediv">
                             <img className="Image2"  src={spots.allSpots[spotID].previewImage} alt=""/>
                             <img className="Image2"  src={spots.allSpots[spotID].previewImage} alt=""/>
                        
                            </div>
                            
                           
               <div className='div2'>
                        <img className="Image2"  src={spots.allSpots[spotID].previewImage} alt=""/>
                       <img className="Image2"  src={spots.allSpots[spotID].previewImage} alt=""/>

                        </div>

                        
                     </div>
                      <div className="detailss">
                        {spots.allSpots[spotID].description}
                        </div> 
                     <div className="reviews">
                     <div className="reviewsb">
                     

                        <div className="ReviewTxt">
                            User Reviews: 
                             <ReviewCard />
        
                             
               </div>
                        
              
             
              
                      </div>
              {(users ) ? (
                  <div className="prices">Price: ${spotObj.allSpots[spotID].price}
                
                  <OpenModalButton
                  buttonText="Edit Spot" 
                  modalComponent={<UpdateSpotForm />}
                  />
                  <button className="button" onClick={()=> Delete(spotID)}>
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
                
                  )}
                  </>
    ) 
}
export default SpotDetails