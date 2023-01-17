import { useParams} from 'react-router-dom'
import React, {useEffect} from "react"
import "./details.css"
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import CreateReviewForm from '../../components/Reviews/index'
import OpenModalButton from '../OpenModalButton'
import CreateSpotForm from '../Get-Spot'
import UpdateSpotForm from '../UpdateSpot'
import Delete from '../DeleteSpot/deleteSpot'
import * as reviewsActions from '../../store/reviews'
import ReviewCard from '../ReviewCard/ReviewCards'
<script src="https://kit.fontawesome.com/d7a09d9013.js" crossorigin="anonymous"></script>
function SpotDetails() {
    
    const dispatch = useDispatch()
    // useEffect(() => {
        // dispatch(spotsActions.getSpots())
    //         }, [dispatch])
    let spots = useSelector(state=>state.spots)
    let {spotsId} = useParams()
    let reviewId = useParams()
    spots = spots.allSpots[spotsId]
    let reviews = useSelector(state=>state.reviews)

   useEffect(() => {
    
    dispatch(reviewsActions.getReviews(spotsId))
}, [dispatch])


return(
    
    <div className="full">    
              
                <h1 className="SpotName">{spots.name}</h1>

                     <div className="spotDetails">
                         <i className="fa-solid fa-star"></i>
                <h4 className="detailsStart">4.0 </h4>
                <h4 className="detailsLeft">{spots.city}</h4>
                <h4 className="detailsCenter">{spots.state}</h4>
                <h4 className="detailsRight">{spots.country}</h4>
                </div>

           
            

                    <div className="mainImage">
               
                <img className="Image"  src={spots.previewImage} alt=""/>
                    
            
                        
                            <div className="imagediv">
                             <img className="Image2"  src={spots.previewImage} alt=""/>
                             <img className="Image2"  src={spots.previewImage} alt=""/>
                        
                            </div>
                            
                           
               <div className='div2'>
                        <img className="Image2"  src={spots.previewImage} alt=""/>
                       <img className="Image2"  src={spots.previewImage} alt=""/>

                        </div>

                        
                     </div>
                     <div className="reviewsb">

                     <div className="reviews">
                        <div className="ReviewTxt">
                            Reviews: <ReviewCard />
                        </div>
                        
               <OpenModalButton
               buttonText="Create Review"
               modalComponent={<CreateReviewForm />}
               />
               </div>
        
               <h5 className="price">Price: ${spots.price}
                       <div className="buttons">
               
               </div>
               <OpenModalButton 
          buttonText="Create Spot"
          modalComponent={<CreateSpotForm />}
          />
          <OpenModalButton
          buttonText="Edit Spot" 
          modalComponent={<UpdateSpotForm />}
          />
          <OpenModalButton
          buttonText="Delete Spot"
          modalComponent={<Delete />}
          />
               
               </h5>
          </div>
          
           
          
              
             
    

          </div>
    ) 
}
export default SpotDetails