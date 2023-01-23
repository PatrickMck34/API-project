import React from "react"
 import {useState, useEffect } from "react";
import {  useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import './Get-spot.css';
import { useHistory} from "react-router-dom";

function CreateSpotForm() {

  const dispatch = useDispatch();
  const spots = useSelector(state=>state.spots.allSpots)
  const spotsobj = Object.values(spots)
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("")
  
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory()
  const newSpot = (spotsobj.length -1)
  const newSpotId=Number(newSpot)
  const spoot = spotsobj[newSpotId].id
  const id = spoot +1

  useEffect(() => {
  dispatch(spotActions.getSpots())
}, [dispatch, spots])


const handleSubmit = (e) => {
  e.preventDefault();
  
  setErrors([]);
  dispatch(spotActions.createSpot({address, city, state, country,name,description, price, previewImage}))
  
  .then(closeModal)
  .catch(async (res) => {
    const data = await res.json();
    if (data && data.errors) setErrors(data.errors);
  });
  history.push(`/spots/${id}`)
  
}

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
            id="address"
           
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
            minLength={2}
            maxLength={2}
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