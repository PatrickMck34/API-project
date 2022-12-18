import React from "react"
 import {useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import './Get-spot.css';
import { useHistory } from "react-router-dom";
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

  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
const history = useHistory()
  const handleSubmit = (e) => {
    history.push("/")
    e.preventDefault();

      // setErrors([]);
      return (dispatch(spotActions.createSpot({address, city, state, country,name,description, price})).dispatch(spotActions.createSpotImage(spots.id, previewImage)))
        // .then(closeModal)
        // .catch(async (res) => {
        //   const data = await res.json();

          // if (data && data.errors) setErrors(data.errors);
        // });
      };

  return (
    <div className="createForm">
      <h1>Create Spot</h1>
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
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          </label>
          <label>
          previewImage
          <input
            type="url"
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
            required
            />
        </label>
          
        <button type="submit">Create Spot</button>
      </form>
    </div>
  );
  
}


export default CreateSpotForm;