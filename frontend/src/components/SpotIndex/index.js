import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./details.css";
import { useSelector, useDispatch } from "react-redux";

import OpenModalButton from "../OpenModalButton";

import UpdateSpotForm from "../UpdateSpot";


import * as spotActions from "../../store/spots";


import { useHistory } from "react-router-dom";
<script
  src="https://kit.fontawesome.com/d7a09d9013.js"
  crossorigin="anonymous"
></script>;
function SpotDetails({ spots }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.session.user);



  const history = useHistory();
  const spotObj = useSelector((state) => state.spots);
  const [render, setRender] = useState(false);
  const [stars, setStars] = useState(5);
  const spotId = useParams();
  const spotID = spotId.spotsid;


  let count = 0;
  let average = count / 

  useEffect(() => {
    if (spots.allSpots[spotID] === undefined) {
      dispatch(spotActions.getSpots());
      dispatch(spotActions.getSpot(spotID));
    

      setRender(true);
    } else {
      dispatch(spotActions.getSpots());
      dispatch(spotActions.getSpot(spotID));
     
      setStars(spots.allSpots[spotID].avgRating);
      setRender(false);
    }
  }, [render, spotID]);

  const DeleteReview = (revId) => {

    
    history.push(`/spots/${spotID}`);
  };

  const Delete = (spotID) => {
    dispatch(spotActions.deleteSpots(spotID)).then(() =>
      dispatch(spotActions.getSpots())
    );
    history.push(`/`);
  };
  return (
    <div className="root mt-24 ml-20">
      {spots.allSpots[spotID] === undefined ? (
        <div key={"no"}></div>
      ) : (
        <div key={spots.id} className="full">
          <div className="spotDetails">
            <div className="inline-flex justify-center flex-row mt-2">
             
              
              <h1 className="SpotName mt-3 text-2xl">
                {spots?.allSpots[spotID].name}
              </h1>
              <h4 className="detailsLeft text-lg mt-4">
                {spots?.allSpots[spotID].city}
              </h4>
              <h4 className="detailsCenter text-lg mt-4">
                {spots?.allSpots[spotID].state}
              </h4>
              <h4 className="detailsRight text-lg mt-4">
                {spots?.allSpots[spotID].country}
              </h4>
            </div>
          </div>

          <div className="mainImage  justify-center ">
            <img
              className="Image max-w-[200%] "
              src={spots?.allSpots[spotID].previewImage}
              alt=""
            />

            <div className="imagediv">
              <img
                className="Image2"
                src={spots?.allSpots[spotID].previewImage}
                alt=""
              />
              <img
                className="Image2"
                src={spots?.allSpots[spotID].previewImage}
                alt=""
              />
            </div>

            <div key={spotID + "image"} className="div2">
              <img
                className="Image2"
                src={spots?.allSpots[spotID].previewImage}
                alt=""
              />
              <img
                className="Image2"
                src={spots?.allSpots[spotID].previewImage}
                alt=""
              />
            </div>
          </div>
          <div
            key={"details" + spotID}
            className="detailss text-3xl font-bold text-slate-700 "
          >
            {spots?.allSpots[spotID].description}

            <div key={spotID + "reviews"} className="review max-w-[40%]  ">
              {/* <!-- component --> */}
              <div className="py-16 white text-lg inline-flex justify-between w-[200%] ">
                User Reviews:
               
                   
                {users ? (
                  <div>
                    <div className="buttonprices flex ">
                      Price: ${spotObj.allSpots[spotID].price}
                      {console.log(spots.allSpots[spotID].ownerId)}
                      {users && users.id === spots.allSpots[spotID].ownerId ? (
                        <>
                          <OpenModalButton
                            buttonText="Edit Spot"
                            modalComponent={<UpdateSpotForm />}
                          />

                          <button
                            className="button"
                            onClick={() => Delete(spotID)}
                          >
                            Delete Spot
                          </button>
                        </>
                      ) : (
                        <div></div>
                      )}
                      
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SpotDetails;
