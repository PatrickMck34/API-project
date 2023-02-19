
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {  useHistory } from 'react-router-dom'
import * as reviewsActions from "../../store/reviews"
import { useEffect} from 'react'
import "./ReviewCard.css"

function ReviewCard({spotId}) {
    const spotID = Object.values(spotId)
    const history = useHistory()
    const dispatch=useDispatch()

    const reviewsObj = useSelector(state=> state.reviews.allReviews)

    const users = useSelector(state => state.session.user)
    const reviews = Object.values(reviewsObj) 
    
   


useEffect(() => {
    
    dispatch(reviewsActions.getReviews(spotID));
}, [dispatch, reviews.length]);

const DeleteReview = (revId) => {
  
    dispatch(reviewsActions.deleteReviews(revId)).then(()=>(dispatch(reviewsActions.getReviews(spotID))))
    history.push(`/spots/${spotID}`)
    
}
return(
    
    reviews.map((review) => {
     
       
       
        
    
    return(
        <>
      
        


<div key={review.id} className="ReviewPad">
                <div key={review.id + "hey"}>
      
       
             <div className="reviewDetails" key={review.spotId}>
                 <div key={review.id +"user"}>
               
                {review.User !== undefined
                 ? (
                     <pre className="pre" key={review.id +"3" }>
                         <i  className="fas fa-user-circle"/> 
                        {review.User.firstName}         {new Date(review.updatedAt).toLocaleDateString()}           <i className="fa-solid fa-star"/>{review.stars}  
                      
                        </pre>
                ):(
                    <div key={review.id +"5"}>
                        {users.firstName}

                    </div>

)
}
                
       <div className="reviewDetails" key={review.id}>
{review.review} 
        </div>     
                
                </div>  

           </div>
        {review.User && users && (users.id === review.User.id) ? ( 
  
        
        <div>
  
            <button type="button" className="Deletebutton" onClick={()=>DeleteReview(review.id)}>
        Delete Review

    </button>
  
            </div>
            ):(
                <div></div>
                )}
             
       
   
           
      
            {(!!review.User ) ? (
                <div>
        </div>
      


):(
    <div>
                
</div>
            )}
     </div> 

     
 <div>     
                </div>
         
                    <div></div>
                    </div> 
                </>
                

         
       
         
  
         
     
     )
 }
)

)}

export default ReviewCard
         
  
         
     
  