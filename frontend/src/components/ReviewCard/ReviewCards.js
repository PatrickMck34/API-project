import { csrfFetch } from '../../store/csrf'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import * as reviewsActions from "../../store/reviews"
import { useEffect} from 'react'
import "./ReviewCard.css"
import DeleteReview from '../DeleteReview/DeleteReviews'
import OpenModalButton from '../OpenModalButton'
function ReviewCard() {
    const dispatch=useDispatch()
    const {spotsId} = {useParams}
    const reviewsObj = useSelector(state=> state.reviews.allReviews)
    const reviews = Object.values(reviewsObj) 

 useEffect(() => {
   if(reviews)
     dispatch(reviewsActions.getReviews(spotsId))
  
    
   }
, [dispatch])

 return(
     
     reviews.map((review) => {
         
             return(
                 <>
      


<div key={review.id} className="ReviewPad">

        {review.review} 

        </div>

        {/* <div>
        <button onclick={(dispatch(reviewsActions.deleteReviews(review.id)),[dispatch])}>

        </button>
        </div> */}
           </>
         
       
         
  
         
     
     )
 }
)   


)}

export default ReviewCard