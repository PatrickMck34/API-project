import { csrfFetch } from './csrf'; 

const READ_REVIEWS = '/reviews'
const DELETE_REVIEW = '/reviews/:reviewId';
const CREATE_REVIEW = '/reviews/new'
const READ_REVIEW = '/reviews/spotsid'

export const createReviews = (reviews) => async (dispatch) => {
    const {review, stars, spotId} = reviews
 const data = await csrfFetch(`/api/spots/${spotId}/reviews` , {
        method: "POST",
        body: JSON.stringify({
           review, stars
        }),
    });
    const response = await data.json()
    
    dispatch(createReview(response))
    return response
}

export const createReview = (review) =>({
    type: CREATE_REVIEW,
    payload: review
})
export const getReviews = (spotId) => async (dispatch) => {
const data = await csrfFetch(`/api/spots/${spotId}/reviews`)
    const response = await data.json()
    dispatch(getReview(response))
    return response
}
export const getReview = (review) =>({
    type: READ_REVIEWS,
    payload: review
})
export const deleteReviews = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });
    dispatch(deleteReview(id));
    return response;
};
export  const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    };
};

const initialState =  {allReviews:{}, singleSpotReviews: {}}
export const reviewsReducer = (state = initialState, action) => {
    let newState = {}
    
    switch (action.type) {
               case CREATE_REVIEW:
                 newState = { allReviews:{...state.allReviews}} 
                newState.allReviews[action.payload.id] = action.payload
                return newState

                case READ_REVIEWS:
                 newState ={allReviews: {} };
                 action.payload.Reviews.forEach(reviews => newState.allReviews[reviews.id] = reviews)
                return newState

                case READ_REVIEW:
                 newState ={singleSpotReviews: {} };
                 action.payload.Reviews.forEach(reviews => newState.singleSpotReviews[reviews.id] = reviews)
                return newState 

                case DELETE_REVIEW:
             newState = {...state}
             delete newState[action.payload]
            
      default:
    return state
}}
export default reviewsReducer