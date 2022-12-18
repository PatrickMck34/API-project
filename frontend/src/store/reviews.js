import { csrfFetch } from './csrf'; 

const READ_REVIEWS = '/reviews'
const UPDATE_REVIEWS = '/reviews/edit'

const DELETE_REVIEW = '/reviews/:review';
const CREATE_REVIEW = '/reviews/new'

export const createReviews = (reviews, spotId) => async (dispatch) => {

    const {review, stars} = reviews
 const data = await csrfFetch(`/api/spots/${spotId}/reviews` , {
        method: "POST",
        body: JSON.stringify({
           review, stars
        }),
    });
    const response = await data.json()
    console.log(data)
    dispatch(createReview(response))
}

export const createReview = (review) =>({
    type: CREATE_REVIEW,
    payload: review
})

const initialState =  {allReviews:{}, singleReview:{}}
export const reviewsReducer = (state = initialState, action) => {
    let newState = {}
    
    switch (action.type) {
case CREATE_REVIEW:
                 newState = {...state, allReviews:{ ...state.allReviews}}
                
                newState.allReviews[action.payload.id] = action.payload
                return newState

                case READ_REVIEWS:
                 newState ={...state, singleReview: {} };
                newState.singleReview = action.review
                return newState
      default:
    return state
}}
export default reviewsReducer