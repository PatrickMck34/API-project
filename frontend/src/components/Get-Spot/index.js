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
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
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
          placeholder="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
          placeholder="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
          placeholder="state"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
          placeholder="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
          placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="labels">
     
          <input className="input"
          placeholder="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          </label>
          <label className="labels">

          <input className="input"
          placeholder="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          </label>
          <label className="labels">
        
          <input className="input"
          placeholder="image URL"
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