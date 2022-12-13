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
    dispatch(setSpot(data.spots));
    return response;
};
const setSpot = (spots) => {
    return {
        type: SET_SPOT,
        payload: spots,
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
const SET_SPOT = 'spot/setSpot';
const REMOVE_SPOT = 'spot/removeSpot';
const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_SPOT:
            newState = Object.assign({}, state);
            newState.spots = action.payload;
            return newState;
            case REMOVE_SPOT:
                newState = Object.assign({}, state);
                newState.spots = null;
                return newState;
                default:
        return state;
    }
}


export default spotsReducer;
