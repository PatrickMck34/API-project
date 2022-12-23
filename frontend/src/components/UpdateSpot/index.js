import React from "react"
 import {useState, useContext} from "react";
import { useDispatch , useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import './update.css';
import { useHistory ,useParams, useLocation} from "react-router-dom";




function UpdateSpotForm() {
  const spots =  useSelector(state=>state.spots)
  let Location = useLocation()
  const dispatch = useDispatch();
  
  
  
  const [address, setAddress] = useState("address");
  const [city, setCity] = useState("city");
  const [state, setState] = useState("state");
  const [country, setCountry] = useState("country");
  const [name, setName] = useState("name");
  const [description, setDescription] = useState("description");
  const [price, setPrice] = useState("price");

  const num = (window.location.href.length - 1)
const  spotsId = (window.location.href[num])
  const spot = {address, city, state, country,name,description, price}
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();
  const history = useHistory()
    const handleSubmit = (e) => {
      history.push("/")
      e.preventDefault();
  
        return (dispatch(spotActions.updateSpot({address, city, state, country,name,description, price, spotsId})))
          .then(closeModal)
          .catch(async (res) => {
            const data = await res.json();
  
            if (data && data.errors) setErrors(data.errors);
          });
        };
  
    return (
      <>
        <h1 className="title">Update Spot</h1>
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
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            </label>
     
           
            
          <button type="submit" className="button">Update Spot</button>
        </form>
      </>
    );
    
  }
  
  
  export default UpdateSpotForm;