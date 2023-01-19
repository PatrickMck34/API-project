import { csrfFetch } from '../../store/csrf'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import * as reviewsActions from "../../store/reviews"
import { useEffect, useState} from 'react'
import "./ReviewCard.css"
import DeleteReview from '../DeleteReview/DeleteReviews'
import OpenModalButton from '../OpenModalButton'
import * as sessionActions from "../../store/session"
function ReviewCard() {
    const history = useHistory()
    const dispatch=useDispatch()
    const {spotsId} = useParams()
    const reviewsObj = useSelector(state=> state.reviews.allReviews)
    const user = useSelector(state => state.session.user.id)
    const reviews = Object.values(reviewsObj) 

 useEffect(() => {
   if(reviews)
     dispatch(reviewsActions.getReviews(spotsId))
   }
, [dispatch])
let revId

const DeleteReview = () => {
   
     dispatch(reviewsActions.deleteReviews(revId))
     history.push(`/`)
}

 return(
     
     reviews.map((review) => {
         revId = review.id
             return(
                 <>
      


<div key={review.id} className="ReviewPad">
        {review.User.firstName} says: <p></p>
        {review.review} 

        </div>
<p></p>
        <div>
      
            {(review.User.id === user) ? (

                <button className="button" onClick={()=>DeleteReview(review.id)}>
            Delete Review

        </button>
            ):(
                <div></div>
                )}
                </div>
                </>
         
       
         
  
         
     
     )
 }
)   


)}

export default ReviewCard