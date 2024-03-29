import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import "./details.css"
import { useSelector, useDispatch } from 'react-redux'
import CreateReviewForm from '../../components/Reviews/index'
import OpenModalButton from '../OpenModalButton'
import BookingFormModal from '../Bookings/Bookings'
import UpdateSpotForm from '../UpdateSpot'
import * as bookingActions from "../../store/bookings"

import * as spotActions from "../../store/spots"
import ReviewCard from '../ReviewCard/ReviewCards'


import { useHistory } from 'react-router-dom'
<script src="https://kit.fontawesome.com/d7a09d9013.js" crossorigin="anonymous"></script>
function SpotDetails({ spots }) {


    const dispatch = useDispatch()
    const users = useSelector(state => state.session.user)
    const reviewsObj = useSelector(state => state.reviews.allReviews)
    const reviews = Object.values(reviewsObj)





    const history = useHistory()
    const spotObj = useSelector(state => state.spots)
    const [render, setRender] = useState(false)
    const [stars, setStars] = useState(5)
    const spotId = useParams()
    const spotID = spotId.spotsid

    const booking = useSelector(state => state.bookings.User)
    const bookings = Object.values(booking)
    let count = 0
    let average = (count / (reviews.length))

    useEffect(() => {
        if (spots.allSpots[spotID] === undefined) {
            dispatch(spotActions.getSpots())
            dispatch(spotActions.getSpot(spotID))
            dispatch(bookingActions.getBookingsSpot(spotID))
            setRender(true)
        } else {
            dispatch(spotActions.getSpots())
            dispatch(spotActions.getSpot(spotID))
            setStars(spots.allSpots[spotID].avgRating)
            setRender(false)
        }
    }, [render, spotID])




    const Delete = (spotID) => {


        dispatch(spotActions.deleteSpots(spotID)).then(() => dispatch(spotActions.getSpots()))
        history.push(`/`)
    }
    return (
        <div className="root">
            {spots.allSpots[spotID] === undefined ? (
                <div key={"no"}></div>
            ) : (

                <div key={spots.id} className="full">




                    <h1 className="SpotName">{spots.allSpots[spotID].name}</h1>


                    <div className="spotDetails">
                        {reviews.map(review => {
                            count += review.stars
                            average = count / (reviews.length)
                        }, {})
                        }
                        {Number.isNaN(average) ? (
                            <div>
                                <i className="fa-solid fa-star">No Reviews</i>

                            </div>
                        ) : (
                            <div>
                                {reviews.length >= 2 ? (
                                    <div>
                                        <pre className="avgReviews"> <i className="fa-solid fa-star">{average}          {reviews.length}-Reviews</i></pre>
                                    </div>
                                ) : (
                                    <div>
                                        <pre className="avgReviews"> <i className="fa-solid fa-star">{average}          {reviews.length}-Review</i>
                                        </pre>
                                    </div>


                                )}


                            </div>

                        )}

                        <h4 className="detailsLeft">{spots.allSpots[spotID].city}</h4>
                        <h4 className="detailsCenter">{spots.allSpots[spotID].state}</h4>
                        <h4 className="detailsRight">{spots.allSpots[spotID].country}</h4>
                    </div>




                    <div className="mainImage">

                        <img className="Image" src={spots.allSpots[spotID].previewImage} alt="" />



                        <div className="imagediv">
                            <img className="Image2" src={spots.allSpots[spotID].previewImage} alt="" />
                            <img className="Image2" src={spots.allSpots[spotID].previewImage} alt="" />

                        </div>


                        <div key={spotID + "image"} className='div2'>
                            <img className="Image2" src={spots.allSpots[spotID].previewImage} alt="" />
                            <img className="Image2" src={spots.allSpots[spotID].previewImage} alt="" />

                        </div>


                    </div>
                    <div key={"details" + spotID} className="detailss">
                        {spots.allSpots[spotID].description}
                    </div>


                    <div key={spotID + "reviews"} className="reviews">
                        User Reviews:
                    


                        <div className="reviewsb">
                            {(users) ? (
                                <div className="prices">
                                    <div className="buttonprices">
                                        Price: ${spotObj.allSpots[spotID].price}

                                        {console.log(spots.allSpots[spotID].ownerId)}
                                        {users && (users.id === spots.allSpots[spotID].ownerId) ? (

                                            <>
                                                <OpenModalButton
                                                    buttonText="Edit Spot"
                                                    modalComponent={<UpdateSpotForm />}
                                                />

                                                <button className="button" onClick={() => Delete(spotID)}>
                                                    Delete Spot
                                                </button>
                                            </>
                                        ) : (
                                            <div></div>
                                        )}
                                        <OpenModalButton
                                            buttonText="Create Review"
                                            modalComponent={<CreateReviewForm spotId={spotId} />}
                                        />
                                        <OpenModalButton
                                            buttonText="Reserve"
                                            modalComponent={<BookingFormModal spotId={spotId} />}
                                        />
                                        Reserved From :
                                        {bookings?.map((el) => {
                                            { console.log(el.startDate) }
                                            return (<div>
                                                {el.spotId === spotID ? (
                                                    <div>
                                                        {el.startDate}
                                                        <br></br>
                                                        until
                                                        <br></br>
                                                        {el.endDate}
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )
                                                }
                                            </div>
                                            )


                                        })}
                                    </div>

                                </div>

                            ) : (
                                <div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}
export default SpotDetails






