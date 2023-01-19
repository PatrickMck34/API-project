
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import * as reviewsActions from "../../store/reviews"
import * as sessionActions from "../../store/session"
import { useEffect} from 'react'
import "./ReviewCard.css"

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
useEffect(() => {
    dispatch(sessionActions.restoreUser());
  }, [dispatch]);

const DeleteReview = () => {
   
     dispatch(reviewsActions.deleteReviews(revId))
     history.push(`/`)
}

return(
    
    reviews.map((review) => {
        revId = review.id
        if(user)return(
                <>
      


<div key={review.id} className="ReviewPad">
            {user ? (
                <div>
        {/* {review.User.firstName} says: <p></p> */}
      
           {review.review} 
        </div>



        ):(
            <div>
            {review.review} 
</div>
            )}
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