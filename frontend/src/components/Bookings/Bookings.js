import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as bookingsActions from "../../store/bookings"
import { useHistory } from "react-router-dom";

function BookingFormModal() {
  const dispatch = useDispatch();
  const [startDate, setstartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const todayTime = new Date().toLocaleDateString()
  const num = (window.location.href.length - 1)
  const  spotsId = (window.location.href[num])
const spotId = parseInt(spotsId)




console.log("string with errors", errors)
const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if(new Date(startDate).toLocaleDateString() < new Date(todayTime).toLocaleDateString()) return setErrors(["Start Date Must Be After Today"])
    if(new Date(endDate) < new Date(startDate)) return setErrors(["Start Date Must Be Before End Date"])
    if(new Date(startDate).toLocaleDateString() === new Date(endDate).toLocaleDateString()) return setErrors(["End Date Must Be At Least One Day After Start Date"])
    return dispatch(bookingsActions.createBookings({ startDate, endDate, spotId }))
    .then(closeModal)
    .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors)
        }
         else {
          setErrors(["Unable to Reserve Spot, May Already be Booked. Please Try Another Date"])

        }
      }
        );
    };

  return (
    <>
      <h1 className="title">Book This Spot</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        
        </ul>
        <label className="label">
       
          <input className="input"
            type="Date"
            placeholder={todayTime}
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
            required
          />
        </label>

        <label className="label">
     
          <input className="input"
            type="Date"
            placeholder={todayTime}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <button className="button" type="submit">Reserve</button>
      </form>
    </>
  );
}

export default BookingFormModal;