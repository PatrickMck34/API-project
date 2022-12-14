import React from 'react'
import './Card.css' 
import spotActions from '../../store/spots'
import {useSelector} from 'react-redux'

function Card(url, name, description, price) {

    const spots = useSelector(state=> state.spots)
    url = "https://upload.wikimedia.org/wikipedia/commons/2/20/Window_tinting_for_homes.png"
    name = spots.name
    description = "A beautiful work in progress!"
    price = "It aint cheap!"
    return (
        <div className='card'>
        <img src={url} alt="" />
        <div className='card_info'>
            <h2 className='card_name'>{name}</h2>
            <h4 className='card_description'>{description}</h4>
            <h3 className='card_price'>{price}</h3>
        </div>

        </div>
    )
}
export default Card