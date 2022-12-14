// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import React from 'react'
// import './GetSpots.css'
// import * as spotActions from '../../store/spots' 



// export const GetSpots = (spots) => async (dispatch) => {
//   //  const spots = useSelector(state=> state.spots)
  
//     const {ownerId, address, city, state, country, lat, lng, name,description, price, createdAt, updatedAt, previewImage} = spots;
//     const response = await fetch("/api/spots", {
//         method: "GET",
//         body: JSON.stringify({
//             ownerId, 
//             address, 
//             city, 
//             state, 
//             country, 
//             lat, 
//             lng, 
//             name,
//             description, 
//             price, 
//             createdAt, 
//             updatedAt,
//             previewImage
//         }),
//     });
//     const data = await response.json();
//     dispatch(spotActions.getSpots(data.spots));
//     return response;
        // const [address, setAddress] = useState("");
        // const [city, setCity] = useState("");
        // const [state, setState] = useState("");
        // const [country, setCountry] = useState("");
        // const [name, setName] = useState("");
        // const [description, setDescription] = useState("");
        // const [price, setPrice] = useState("");
        // const [previewImage, setPreviewImage] = useState('')
        // const [data, setData] = useState('')
        

          // useEffect(()=> {
          //   fetch('/api/spots', {method:'GET'})
          //   .then(res =>res.json)
          //   .then(data=>setData(data))
          // },[])

            
    
    





// }
export default GetSpots