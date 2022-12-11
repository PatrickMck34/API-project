import React from 'react'
import './Card.css' 

function Card(url, name, description, price) {
    url = "https://upload.wikimedia.org/wikipedia/commons/2/20/Window_tinting_for_homes.png"
    name = "A pretty location"
    description = "A beautiful work in progress!"
    price = "Price: It ain't cheap!"
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