import React from "react"
 import {useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";

import * as reviewActions from "../../store/reviews"
import './reviews.css';
import { useHistory} from "react-router-dom";

function CreateReviewForm() {

  const dispatch = useDispatch();
  const reviews = useSelector(state=>state.reviews.allReviews)
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const num = (window.location.href.length - 1)
  const  spotsId = (window.location.href[num])
const spotId = parseInt(spotsId)
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
const history = useHistory()
useEffect(() => {
  if(reviews.length)
  dispatch(reviewActions.getReviews())
}, [dispatch, reviews.length])

const handleSubmit = (e) => {
  e.preventDefault();
  setErrors([]);
  return dispatch(reviewActions.createReviews({review, stars, spotId}))
  .then(closeModal)
  .catch(async (res) => {
    const data = await res.json();
    
    if (data && data.errors) setErrors(data.errors);
  });
  
};

history.push(`/spots/${spotId}`)
return (
  <div className="createReview">
      <h1 className="title">Create Review</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className='labels'>
         <input className="input"
         placeholder="review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </label>
        <label className="labels">
       
          <input className="input"
          placeholder="stars"
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