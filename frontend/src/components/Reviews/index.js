import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";

import * as reviewActions from "../../store/reviews";
import "./reviews.css";
import { useHistory } from "react-router-dom";

function CreateReviewForm() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.allReviews);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");
  const [avgStars, setAvgStars] = useState(0);
  const num = window.location.href.length - 1;
  const spotsId = window.location.href[num];
  const spotId = parseInt(spotsId);
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(reviewActions.createReviews({ review, stars, spotId }))
      .then(() => dispatch(reviewActions.getReviews(spotId)))
      .then(closeModal)
      .then(() => setAvgStars(avgStars + stars / reviews.length))
      .catch(async (res) => {
        const data = await res.json();
        setErrors(["Review Already Submitted"]);
        if (data && data.errors) setErrors(data.errors);
      });
    history.push(`/spots/${spotsId}`);
  };

  return (
    <div className="createReview">
      <h1 className=" title text-2xl ">Create Review</h1>
      <form onSubmit={handleSubmit} className="h-55 w-[98%] px-4 mt-3">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="labels">
          <input
            className="input ml-7 h-8"
            placeholder="review"
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </label>
        <label className="labels">
          <input
            className="input mt-1 ml-7 h-8"
            placeholder="stars"
            type="number"
            min={0}
            max={5}
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
          />
        </label>

        <button className="button mt-8 buttonEdit" type="submit">
          Create Review
        </button>
      </form>
    </div>
  );
}

export default CreateReviewForm;
