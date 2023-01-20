
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import * as reviewsActions from "../../store/reviews"
import * as sessionActions from "../../store/session"
import { useEffect, useLayoutEffect} from 'react'
import "./ReviewCard.css"

function ReviewCard() {
    const history = useHistory()
    const dispatch=useDispatch()
    const {spotsId} = useParams()
    const reviewsObj = useSelector(state=> state.reviews.allReviews)
    const user = useSelector(state => state.session.user.id)
    const usersObj = useSelector(state => state.session.user)
    const reviews = Object.values(reviewsObj) 
    const users = Object.values(usersObj)



 useLayoutEffect(() => {
     dispatch(reviewsActions.getReviews(spotsId))
   }
, [dispatch], [reviews])
let revId
useEffect(() => {
    dispatch(sessionActions.restoreUser());
}, [dispatch]);

const DeleteReview = () => {
    
    
    history.push(`/spots/${spotsId}`)
    return dispatch(reviewsActions.deleteReviews(revId))
    
}
return(
    
    reviews.map((review) => {
       
        revId = review.id
       
return(
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
     
<div>        {users && (user === review.userId) ? ( 

        
        <div>

                <button className="button" onClick={()=>DeleteReview(review.id)}>
            Delete Review

        </button>
            </div>
            ):(
                <div></div>
                )}
                </div>
         
                    <div></div>
                </>
                

         
       
         
  
         
     
     )
 }
)

)}

export default ReviewCard