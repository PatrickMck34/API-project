import { csrfFetch } from './csrf';

export const createSpot = (spot) => async (dispatch) => {
    const {ownerId, address, city, state, country, lat, lng, name,description, price, createdAt, updatedAt, previewImage} = spot;
    const response = await csrfFetch("/api/spots", {
        method: "POST",
        body: JSON.stringify({
            ownerId, 
            address, 
            city, 
            state, 
            country, 
            lat, 
            lng, 
            name,
            description, 
            price, 
            createdAt, 
            updatedAt,
            previewImage
        }),
    });
    const data = await response.json();
    dispatch(getSpots(data.spots));
    return response;
};
export const GetSpots = (spots) => async (dispatch) => {
    const data = await csrfFetch("/api/spots", {
        method: "GET",
    })
    const { address, city, state, country, lat, lng, name,description, price, createdAt, updatedAt, previewImage} = data;

    
    dispatch(getSpots(data));
    return data;
};
// export const Spot = (spot) => async (dispatch) => {
//     const {ownerId, address, city, state, country, lat, lng, name,description, price, createdAt, updatedAt, previewImage} = spot;
export const getSpots = (data) => {
    return {
        type: GET_ALL_SPOTS,
        payload: data.Spots,
    };
};

export const deleteSpot = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'DELETE',
    });
    dispatch(removeSpot());
    return response;
};
const removeSpot = () => {
    return {
        type: REMOVE_SPOT,
    };
};
const initialState = {spots: null}
const GET_SPOT = '/spots/:spotId';
const GET_ALL_SPOTS = '/spots'
const REMOVE_SPOT = '/spot/:spotId/DELETE';
export const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_SPOTS:
            // newState = Object.assign({}, state);
            newState = action.payload
            return state 
          
            case GET_SPOT:
                newState = Object.assign({}, state);
                newState = action.payload
                return newState;
                default:
        return state;
    }
}


export default spotsReducer;
