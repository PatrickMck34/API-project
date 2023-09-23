import React, { useState, useEffect } from "react";
import "./Home.css";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import * as spotActions from "../../store/spots";

import { useContext } from "react";
import { AvgStarContext } from "../../context/averageContext";

function Home({ children }) {
  const Avg = useContext(AvgStarContext);
  const dispatch = useDispatch();
  const spotsObj = useSelector((state) => state.spots.allTrees);

  const spots = Object.values(spotsObj);

  const [star, setStar] = useState([]);
  const id = spots.id;
  useEffect(() => {
    dispatch(spotActions.getTrees());
  }, [spots.allTrees]);

 

  return (
    <div className="home-section ml-auto mr-auto max-w-[100%] min-w-50%">
      <div className="home flex">
        <div key={id} className="home-section justify-center">
          {spots.map((spot) => {
            let id = parseInt(spot.id);

            return (
              <>
                <div className="inline-flex justify-center mt-16">
                  <Link key={spot.id + "link"} to={`/spots/${spot.id}`}>
                    <div class="justify-center flex-col  "></div>

                    <img
                      class="rounded-t-lg rounded-b-lg h-72 w-4/6"
                      src={spot.previewImage}
                      alt=""
                    />

                    <div class="p-1">
                      <h5 class=" text-md font-bold tracking-tight">
                        {spot.city}, {spot.state}
                      </h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-yellow-600">
                        <i className="fa-solid fa-star">{spot.avgRating}</i>
                      </p>

                      <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red">
                        ${spot.price} A Night
                      </p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
