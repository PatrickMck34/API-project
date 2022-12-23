import { csrfFetch } from './csrf'; 

const READ_REVIEWS = '/reviews'
const UPDATE_REVIEWS = '/reviews/edit'

const DELETE_REVIEW = '/reviews/:review';
const CREATE_REVIEW = '/reviews/new'

export const createReviews = (reviews, stars, spotId) => async (dispatch) => {

    
 const data = await csrfFetch(`/api/spots/${spotId}/reviews` , {
        method: "POST",
        body: JSON.stringify({
           reviews, stars, spotId
        }),
    });
    const response = await data.json()
    console.log(data)
    dispatch(createReview(response))
    return response
}

export const createReview = (review) =>({
    type: CREATE_REVIEW,
    payload: review
})
export const getReviews = (spotId) => async (dispatch) => {
const data = await csrfFetch(`/api/spots/${spotId}/reviews` , {
    method: "GET",
    body: JSON.stringify({
       spotId
    }),
});
const response = await data.json()
dispatch(getReview(response))
return response
}
export const getReview = (review) =>({
    type: READ_REVIEWS,
    payload: review
})

const initialState =  {allReviews:{}}
export const reviewsReducer = (state = initialState, action) => {
    let newState = {}
    
    switch (action.type) {
case CREATE_REVIEW:
                 newState = {...state, allReviews:{ ...state.allReviews}}
                
                newState.allReviews[action.payload.id] = action.payload
                return newState

                case READ_REVIEWS:
                 newState ={...state, allReviews: {} };
                newState.allReviews = action.review
                return newState
      default:
    return state
}}
export default reviewsReducer