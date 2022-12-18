import { csrfFetch } from './csrf'; 

const READ_SPOT = '/spots/:spotId';
const READ_SPOTS = '/spots';
const UPDATE_SPOT = '/spots/edit'

const DELETE_SPOT = '/spots/:spotId';
const CREATE_SPOT = '/spots/new'

export const createSpot = (spot) => async (dispatch) => {

    const { address, city, state, country, lat, lng, name,description, price, url} = spot
 const data = await csrfFetch("/api/spots/", {
        method: "POST",
        body: JSON.stringify({
            address, city, state, country, lat, lng, name,description, price
        }),
    });

    const response = await data.json()
    dispatch(createSpotImage(url, (response.id)))
    console.log(response.id)
    
    
//     const  result = {...response, url}
//     const id = response.id
//     // dispatch(createSpots(result))
// return result    
};


export const createSpotImage = (url, id) => async (dispatch) => {
    const data = await csrfFetch(`/api/spots/${id}/images`, {
        method: "POST",
        body: JSON.stringify({
            url
            
        }),
    })
    const response = await data.json()
   
    return response
}
export const updateSpot = (spot) => async (dispatch) => {
    // dispatch = useDispatch()
    const { address, city, state, country, lat, lng, name,description, price} = spot
    const id = 1
    const data = await csrfFetch(`/api/spots/1`, {
        method: "PUT",
        body: JSON.stringify({
           id , address, city, state, country, lat, lng, name,description, price
        }),
    });
    const response = await data.json()
    console.log(response)
    dispatch(createSpots(response));
    return response
}
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
    
    
    
    export const getSpot = (id) => async (dispatch) => {
        const data = await csrfFetch(`/api/spots/${id}`)
        
        const spot = await data.json()
        console.log(spot)
        dispatch(readSpot(spot))
        
    }
    
    
    export const readSpots = (spots) =>({
        type: READ_SPOTS,
        payload: spots
    })
    export const readSpot = (spot) =>({
        type: READ_SPOT,
       payload: spot
    })
    
    export const deleteSpots = (id) => async (dispatch) => {
        const response = await csrfFetch(`/api/spots/${id}`, {
            method: 'DELETE',
        });
        dispatch(deleteSpot(id));
        return response;
    };
  export  const deleteSpot = (spotId) => {
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
                return newState
                
      
             case DELETE_SPOT:
             newState = {...state}
             delete newState[action.payload.id]
            return newState

            case UPDATE_SPOT:
            newState = {...state, allSpots:{ ...state.allSpots}}
            newState.allSpots[action.payload.id] = action.payload
            return newState
            default:
            return state;
        }
    }
    
    
    export default spotsReducer;
    