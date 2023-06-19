import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import * as spotActions from "../../store/spots";
import "./update.css";
import { useHistory } from "react-router-dom";

function UpdateSpotForm() {
  const spots = useSelector((state) => state.spots);

  const dispatch = useDispatch();

  const num = window.location.href.length - 1;
  const spotsId = window.location.href[num];

  const [address, setAddress] = useState(`${spots.allSpots[spotsId].address}`);
  const [city, setCity] = useState(`${spots.allSpots[spotsId].city}`);
  const [state, setState] = useState(`${spots.allSpots[spotsId].state}`);
  const [country, setCountry] = useState(`${spots.allSpots[spotsId].country}`);
  const [name, setName] = useState(`${spots.allSpots[spotsId].name}`);
  const [description, setDescription] = useState(
    `${spots.allSpots[spotsId].description}`
  );
  const [price, setPrice] = useState(`${spots.allSpots[spotsId].price}`);

  const spot = { address, city, state, country, name, description, price };
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    return dispatch(
      spotActions.updateSpot({
        address,
        city,
        state,
        country,
        name,
        description,
        price,
        spotsId,
      })
    )
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();

        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h1 className="title text-2xl">Update Spot</h1>
      <form onSubmit={handleSubmit} className="h-[29em] px-4 mt-3 w-[100%]  ">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="labels">
          <input
            className="input ml-7 h-9 "
            placeholder="new address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label className="labels mt-5">
          <input
            className="input ml-7 h-9"
            placeholder="new city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label className="labels mt-5">
          <input
            className="input ml-7 h-9"
            placeholder="new state"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label className="labels mt-5 ">
          <input
            className="input ml-7 h-9"
            placeholder="new country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label className="labels mt-5">
          <input
            className="input ml-7 h-9"
            placeholder="new name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="labels mt-5">
          <input
            className="input ml-7 h-9"
            placeholder="new description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label className="labels mt-5">
          <input
            className="input ml-7 h-9 "
            placeholder="new price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="button buttonEdit mt-9 ">
          Update Spot
        </button>
      </form>
    </>
  );
}

export default UpdateSpotForm;
