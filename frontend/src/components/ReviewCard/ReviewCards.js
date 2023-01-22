
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
    const num = (window.location.href.length - 1)
    const  spotsId = (window.location.href[num])
    const reviewsObj = useSelector(state=> state.reviews.allReviews)
    const users = useSelector(state => state.session.user)
    const reviews = Object.values(reviewsObj) 
   
   

//  useEffect(() => {
//     if(reviewsObj[spotsId]){

//         dispatch(reviewsActions.getReviews(spotsId))
//     } else {
//         console.log("isLoading")
//     }
//    }
// , [dispatch, reviewsObj[spotsId]])
let revId
useEffect(() => {
    dispatch(sessionActions.restoreUser());
}, [dispatch]);

const DeleteReview = (revId) => {
    
    
    dispatch(reviewsActions.deleteReviews(revId))
    // history.push(`/spots/${spotsId}`)
    
}
return(
    
    reviews.map((review) => {
       
        revId = review.id
       
return(
           <>
      
        


<div key={review.id} className="ReviewPad">
            {users ? (
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
     
<div>        {users && (users.id === review.userId) ? ( 

        
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