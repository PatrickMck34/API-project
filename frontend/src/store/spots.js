import { csrfFetch } from './csrf'; 
// import { useDispatch } from 'react-redux';
const READ_SPOT = '/spots/:spotId';
const READ_SPOTS = '/spots';
const UPDATE_SPOT = '/spots/edit'

const DELETE_SPOT = '/spot/:spotId/DELETE';
const CREATE_SPOT = '/spots/new'

export const createSpot = (spot) => async (dispatch) => {
    // dispatch = useDispatch()
    const { address, city, state, country, lat, lng, name,description, price} = spot
  const previewImage = spot.previewImage
    const data = await csrfFetch("/api/spots/", {
        method: "POST",
        body: JSON.stringify({
            address, city, state, country, lat, lng, name,description, price
        }),
    });
    
     const response = await data.json();
     const result = {...response, previewImage}
     console.log(result)
    dispatch(createSpots(result));
    return spot;
};
export const createSpots = (spot) =>({
    type: CREATE_SPOT,
    payload: spot
})

export const getSpots = (spots) => async (dispatch) => {
    const data = await csrfFetch("/api/spots")
    const spots = await data.json()
   
    dispatch(readSpots(spots.Spots))
    return spots
    
    //    if(response.ok){
        }
        
    // }
    
    export const getSpot = (id) => async dispatch => {
        const data = await csrfFetch(`/api.spots/${id}`)
        if(data.ok) {
            const spot = await data.json()
            dispatch(readSpot(spot))
            return spot
        }
        
    };
   export const readSpots = (spots) =>({
        type: READ_SPOTS,
        payload: spots
    })
    export const readSpot = spot =>({
        type: READ_SPOT,
       payload: spot
    })
    
    export const deleteSpots = () => async (dispatch) => {
        const response = await csrfFetch('/api/spots', {
            method: 'DELETE',
        });
        dispatch(deleteSpot());
        return response;
    };
    const deleteSpot = (spotId) => {
        return {
            type: DELETE_SPOT,
            spotId
        };
    };
    const initialState =  {allSpots:{}, singleSpot:{}}
    export const spotsReducer = (state = initialState, action) => {
        let newState = {}
        
        switch (action.type) {
            case READ_SPOTS:
                newState = {allSpots:{}, singleSpot:{}}
                
                action.payload.forEach(spot => newState.allSpots[spot.id] = spot)
                return newState 
        

            case READ_SPOT:
                 newState ={...state, singleSpot: {} };
                newState.singleSpot = action.spots
                return newState 
            
            
            case CREATE_SPOT:
                 newState = {...state, allSpots:{ ...state.allSpots}}
                
                newState.allSpots[action.payload.id] = action.payload
                
                
             return newState;
            
            default:
            return state;
        }
    }
    
    
    export default spotsReducer;
    