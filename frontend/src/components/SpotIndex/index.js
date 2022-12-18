import { useParams} from 'react-router-dom'
import React from "react"
import "./details.css"
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import CreateReviewForm from '../../components/Reviews/index'
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
                <h4 className="detailsStart">{spots.reviews}</h4>
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
            
        
                       <div>
               
               
               <h5 className="price">${spots.price}</h5>
                  </div>
           <div>
               <button className="Delete Spot">Delete Spot</button>
                    <CreateReviewForm />
                <button>Edit Spot</button>
                        </div>
          </div>

    ) 
}
export default SpotDetails