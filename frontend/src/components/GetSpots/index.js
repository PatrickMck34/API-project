import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import React from 'react'
import './GetSpots.css'



const  GetSpots = () => {
   
        
        // const [address, setAddress] = useState("");
        // const [city, setCity] = useState("");
        // const [state, setState] = useState("");
        // const [country, setCountry] = useState("");
        // const [name, setName] = useState("");
        // const [description, setDescription] = useState("");
        // const [price, setPrice] = useState("");
        // const [previewImage, setPreviewImage] = useState('')
        const [data, setData] = useState('')
        

          useEffect(()=> {
            fetch('/api/spots', {method:'GET'})
            .then(res =>res.json)
            .then(data=>setData(data))
          },[])
  return(
            
            <div className='card'>
        <img src={data.previewImage} alt="" />
        <div className='card_info'>
            <h2 className='card_name'>{data.name}</h2>
            <h4 className='card_description'>{data.description}</h4>
            <h3 className='card_price'>{data.price}</h3>
        </div>
        </div>
            )
            
    
    





}
export default GetSpots