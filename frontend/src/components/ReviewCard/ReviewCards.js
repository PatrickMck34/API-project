
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
     </div> <section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
    >
      <div class="mb-8 sm:break-inside-avoid">
        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
          <p class="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
          <img
            alt="Woman"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            class="h-12 w-12 rounded-full object-cover"
          />

          <div class="text-sm">
            <p class="font-medium">Gladis Lennon</p>
            <p class="mt-1">Head of SEO</p>
          </div>
        </div>
      </div>

      <div class="mb-8 sm:break-inside-avoid">
        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
          <p class="leading-relaxed text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
            quo deserunt quos expedita minima incidunt sed tempora, a architecto
            consectetur reprehenderit, in repellat voluptatum.
          </p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
          <img
            alt="Woman"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            class="h-12 w-12 rounded-full object-cover"
          />

          <div class="text-sm">
            <p class="font-medium">Gladis Lennon</p>
            <p class="mt-1">Head of SEO</p>
          </div>
        </div>
      </div>

      <div class="mb-8 sm:break-inside-avoid">
        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
          <p class="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            beatae incidunt perferendis soluta facilis voluptas dicta
            repudiandae quasi asperiores libero, exercitationem molestiae autem
            sapiente dolore nulla non consequatur. Eaque, dolores.
          </p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
          <img
            alt="Woman"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            class="h-12 w-12 rounded-full object-cover"
          />

          <div class="text-sm">
            <p class="font-medium">Gladis Lennon</p>
            <p class="mt-1">Head of SEO</p>
          </div>
        </div>
      </div>

      <div class="mb-8 sm:break-inside-avoid">
        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
          <p class="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloribus eius aut unde, dolores accusantium!
          </p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
          <img
            alt="Woman"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            class="h-12 w-12 rounded-full object-cover"
          />

          <div class="text-sm">
            <p class="font-medium">Gladis Lennon</p>
            <p class="mt-1">Head of SEO</p>
          </div>
        </div>
      </div>

      <div class="mb-8 sm:break-inside-avoid">
        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
          <p class="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
            voluptatum quidem nulla quisquam natus velit provident earum esse,
            odio numquam labore recusandae similique sunt.
          </p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
          <img
            alt="Woman"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            class="h-12 w-12 rounded-full object-cover"
          />

          <div class="text-sm">
            <p class="font-medium">Gladis Lennon</p>
            <p class="mt-1">Head of SEO</p>
          </div>
        </div>
      </div>

      <div class="mb-8 sm:break-inside-avoid">
        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
          <p class="leading-relaxed text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
            necessitatibus, repudiandae qui dolor minima.
          </p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
          <img
            alt="Woman"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            class="h-12 w-12 rounded-full object-cover"
          />

          <div class="text-sm">
            <p class="font-medium">Gladis Lennon</p>
            <p class="mt-1">Head of SEO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
               
                    </div> 
                </>
                

         
       
         
  
         
     
     )
 }
)

)}

export default ReviewCard
         
  
         
     
  