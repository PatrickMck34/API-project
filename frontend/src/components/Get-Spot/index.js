import React from "react"
 import {useState, useEffect } from "react";
import {  useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import './Get-spot.css';
import { useHistory, useParams} from "react-router-dom";


function CreateSpotForm() {

  const dispatch = useDispatch();
  const spots = useSelector(state=>state.spots.allTrees)
  const user = useSelector(state=>state.session.user)
  const spotsobj = Object.values(spots)

  
  
  const [number, setNumber] = useState()
  const [location, setLocation] = useState("here")
  const [forSurvivor, setForSurvivor] = useState(false)
  const [message, setMessage]=useState("message")
  
  const [errors, setErrors] = useState([]);

  const history = useHistory()
 


useEffect(()=>{
 
  dispatch(spotActions.getTrees())

 
}, [])

const handleSubmit = (e) => {
  e.preventDefault();
  setErrors([]);
   
   dispatch(spotActions.createTree({location, number, forSurvivor, message}))
  .then()
  .then(()=>dispatch(spotActions.getTrees()))
  .catch(async (res) => {
    const data = await res.json();
    if (data && data.errors) setErrors(data.errors);
  });


  
}

return (
 <div>

      <h1 className="title" >Create Spot</h1>
      <form onSubmit={handleSubmit}
        className="h-[32em] ml-2 px-4 mt-3 w-[100%]  ">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="label ">
          
        </label>
        <label className="label mt-1 ">
          <input
            className="input mt-5 ml-7"
            placeholder="Location"
            type="text"
         
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label className="label mt-[1.5em] ">
          <input
            className="input ml-7"
            placeholder="message"
            type="text"
          
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <label className="label mt-[1.5em]">
          <input
            className="input ml-7"
            placeholder="#"
            type="number"
         
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <label className="label mt-[1.5em]">
          <input
            className="input ml-7"
            placeholder="forSurvivor"
         
            type="Boolean"
         
            onChange={(e) => setForSurvivor(e.target.value)}
            required
          />
        </label>
        <label className="label mt-[1.5em]">
          
        </label>
        <button className="flex button  mt-9  justify-center " type="submit">
          Sign Up
        </button>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        </form>
 </div>
)      
  
}


export default CreateSpotForm;