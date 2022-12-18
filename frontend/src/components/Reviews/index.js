import React from "react"
 import {useState, useParams } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import * as reviewActions from '../../store/reviews'
import './reviews.css';
import { useHistory } from "react-router-dom";

function CreateReviewForm() {
    const spots = useSelector(state=>state.spots)

const spotsId = spots.id

  const dispatch = useDispatch();
  const reviews = useSelector(state=>state.reviews)
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");
 

  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
const history = useHistory()
  const handleSubmit = (e) => {
    
    e.preventDefault();
      
      setErrors([]);
      return dispatch(reviewActions.createReviews({review, stars, spotsId}))
      .then(closeModal)
      .catch(async (res) => {
            const data = await res.json();
          
          if (data && data.errors) setErrors(data.errors);
          });
       
        };
        
  return (
    <div className="createReview">
      <h1>Create Review</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className='Review'>
         Review
         <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </label>
        <label className="stars">
          stars
          <input
            type="range"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
          />
        </label>

        <button type="submit">Create Review</button>
      </form>
    </div>
  );
  
}


export default CreateReviewForm;