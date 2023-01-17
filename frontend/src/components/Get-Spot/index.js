import React from "react"
 import {useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import './Get-spot.css';
import { useHistory, useParams } from "react-router-dom";
import {createSpotImage} from "../../store/spots"
function CreateSpotForm() {
  const dispatch = useDispatch();
  const spots = useSelector(state=>state.spots)
  const [address, setAddress] = useState("address");
  const [city, setCity] = useState("city");
  const [state, setState] = useState("state");
  const [country, setCountry] = useState("country");
  const [name, setName] = useState("name");
  const [description, setDescription] = useState("description");
  const [price, setPrice] = useState("100");
  const [previewImage, setPreviewImage] = useState("")

  const num = (window.location.href.length - 1)
  const  spotsId = (window.location.href[num])


  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
const history = useHistory()

useEffect(() => {
    
  dispatch(spotActions.getSpots())

}, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors([]);
   (dispatch(spotActions.createSpot({address, city, state, country,name,description, price, previewImage})))
    
    
    // return (dispatch(spotActions.createSpot({address, city, state, country,name,description, price})))
    .then(closeModal)
    .catch(async (res) => {
      const data = await res.json();
      
      if (data && data.errors) setErrors(data.errors);
    });
    history.push("/")
  };

  return (
    <div className="createForm">
      <h1 className="title" >Create Spot</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className='labels'>
        
          <input className="input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="labels">
     
          <input className="input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          </label>
          <label className="labels">

          <input className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          </label>
          <label className="labels">
        
          <input className="input"
            type="url"
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
            required
            />
        </label>
          
        <button className="button" type="submit">Create Spot</button>
      </form>
    </div>
  );
  
}


export default CreateSpotForm;