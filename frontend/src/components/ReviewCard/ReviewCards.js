
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {  useHistory } from 'react-router-dom'
import * as reviewsActions from "../../store/reviews"
import * as sessionActions from "../../store/session"
import { useEffect} from 'react'
import "./ReviewCard.css"

function ReviewCard({spotId}) {
    const spotID = Object.values(spotId)
    const history = useHistory()
    const dispatch=useDispatch()
    // const num = (window.location.href.length - 1)
    // const  spotsId = (window.location.href[num])
    const reviewsObj = useSelector(state=> state.reviews.allReviews)
    const spots = useSelector(state=>state.spots)
    const users = useSelector(state => state.session.user)
    const reviews = Object.values(reviewsObj) 
    
   

let revId
useEffect(() => {
    dispatch(reviewsActions.getReviews(spotID));
}, [dispatch]);

const DeleteReview = (revId) => {
  
    dispatch(reviewsActions.deleteReviews(revId)).then(()=>(dispatch(reviewsActions.getReviews(spotID))))
    history.push(`/spots/${spotID}`)
    
}
return(
    
    reviews.map((review) => {
     
       
       
        
    
    return(
        <>
      
        


<div className="ReviewPad">
                <div>
      
       
             <div className="reviewDetails">
                 <div>
                <i  className="fas fa-user-circle" /> {users.firstName }   {new Date(review.updatedAt).toLocaleDateString()}
                    <i className="fa-solid fa-star"/>{review.stars}
                </div>  

           </div>
           {review.review} 
      
             
       
   
           
      
            {(users ) ? (
                <div>
                <button className="Deletebutton" onClick={()=>DeleteReview(review.id)}>
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
         
  
         
     
  