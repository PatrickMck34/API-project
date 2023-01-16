import React from "react"
 import {useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import * as reviewActions from "../../store/reviews"
import './reviews.css';
import { useHistory, useParams } from "react-router-dom";

function CreateReviewForm() {
    const spots = useSelector(state=>state.spots)



  const dispatch = useDispatch();
  const reviews = useSelector(state=>state.reviews)
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(2);

  const num = (window.location.href.length - 1)
  const  spotsId = (window.location.href[num])
const spotId = parseInt(spotsId)
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
const history = useHistory()

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(spotId)
  setErrors([]);
  
     dispatch(reviewActions.createReviews({review, stars, spotId}))
      .then(closeModal)
      .catch(async (res) => {
            const data = await res.json();
          
          if (data && data.errors) setErrors(data.errors);
          });
       
        };
        
  return (
    <div className="createReview">
      <h1 className="title">Create Review</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className='labels'>
         <input className="input"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </label>
        <label className="labels">
       
          <input className="input"
            type="number"
            
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
          />
        </label>

        <button className="button" type="submit">Create Review</button>
      </form>
    </div>
  );
  
}


export default CreateReviewForm;