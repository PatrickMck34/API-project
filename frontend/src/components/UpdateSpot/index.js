import React from "react"
 import {useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import './update.css';
import { useHistory } from "react-router-dom";




function UpdateSpotForm() {
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
  
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();
  const history = useHistory()
    const handleSubmit = (e) => {
      history.push("/")
      e.preventDefault();
  
        // setErrors([]);
        return (dispatch(spotActions.updateSpot({address, city, state, country,name,description, price})))
          // .then(closeModal)
          // .catch(async (res) => {
          //   const data = await res.json();
  
            // if (data && data.errors) setErrors(data.errors);
          // });
        };
  
    return (
      <>
        <h1>Update Spot</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='address'>
            address
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label className="city">
            city
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label className="state">
            state
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </label>
          <label>
            country
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>
          <label>
            name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            </label>
            <label>
            price
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            </label>
            <label>
            previewImage
            <input
              type="text"
              value={previewImage}
              onChange={(e) => setPreviewImage(e.target.value)}
              required
              />
          </label>
            
          <button type="submit">Update Spot</button>
        </form>
      </>
    );
    
  }
  
  
  export default UpdateSpotForm;