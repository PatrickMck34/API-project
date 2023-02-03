
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
   

let revId
useEffect(() => {
    dispatch(sessionActions.restoreUser());
}, [dispatch]);

const DeleteReview = (revId) => {
    
    
    dispatch(reviewsActions.deleteReviews(revId)).then(()=>(dispatch(reviewsActions.getReviews(spotsId))))
    history.push(`/spots/${spotsId}`)
    
}
return(
    
    reviews.map((review) => {
     
       
        revId = review.id
        
    
    return(
        <>
      
        


<div className="ReviewPad">
                <div>
      
                <i  className="fas fa-user-circle" >
        </i>
                {users.firstName}
         <br></br>
        {new Date(review.updatedAt).toLocaleDateString()}
        <br></br>
           {review.review} 
      
            {(users ) ? (
                <div>
                <button className="button" onClick={()=>DeleteReview(review.id)}>
            Delete Review

        </button>
        </div>
      


):(
    <div>
                
</div>
            )}
     </div> 

     
 <div>     
        {users && (users.id === review.userId) ? ( 

        
        <div>

            </div>
            ):(
                <div></div>
                )}
                </div>
         
                    <div></div>
                    </div> 
                </>
                

         
       
         
  
         
     
     )
 }
)

)}

export default ReviewCard
         
  
         
     
  