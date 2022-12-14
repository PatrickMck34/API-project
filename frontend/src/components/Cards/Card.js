import React from 'react'
import './Card.css' 
import {useSelector} from 'react-redux'

function Card(url, name, description, price) {
const spots = useSelector(state=> state.spots)

return(
    spots.map((spot, index) => {
        return(
            <div>

                //         <img src={spot.previewImage} alt="" />
        <h2 className='card_name'>{spot.name}</h2>
        <h4 className='card_description'>{spot.description}</h4>
        <h3 className='card_price'>{spot.price}</h3>
            </div>
        )
    })

//     <div>
//         <div className='card'>
//         <div className='card_info'>
//         </div>
// </div>
//         </div>
        )
}

export default Card