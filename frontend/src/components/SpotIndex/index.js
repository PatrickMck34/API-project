import { useParams} from 'react-router-dom'
import React from "react"
import "./details.css"
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import CreateReviewForm from '../../components/Reviews/index'
import OpenModalButton from '../OpenModalButton'
import CreateSpotForm from '../Get-Spot'
import UpdateSpotForm from '../UpdateSpot'
<script src="https://kit.fontawesome.com/d7a09d9013.js" crossorigin="anonymous"></script>

function SpotDetails() {
    // const dispatch = useDispatch()
    // useEffect(() => {
        // dispatch(spotsActions.getSpots())
    //         }, [dispatch])
    let spots = useSelector(state=>state.spots)
let {spotsId} = useParams()
spots = spots.allSpots[spotsId]



    return(

<div >    
              
                <h1 className="SpotName">{spots.name}</h1>

                     <div className="spotDetails">
                         <i className="fa-solid fa-star"></i>
                <h4 className="detailsStart">4.0  -1 reviews</h4>
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
            
        
                       <div className="buttons">
               
               <OpenModalButton 
          buttonText="Create Spot"
          modalComponent={<CreateSpotForm />}
          />
          <OpenModalButton
          buttonText="Edit Spot" 
          modalComponent={<UpdateSpotForm />}
          />
          <OpenModalButton
          buttonText="Create Review"
          modalComponent={<CreateReviewForm />}
          />
               
                  </div>
               <h5 className="price">Price: ${spots.price}
               </h5>
          
           <div>
               <button className="Delete Spot">Delete Spot</button>
              
             
                        </div>
          </div>

    ) 
}
export default SpotDetails