import { csrfFetch } from './csrf'; 

const READ_SPOT = '/spots/:spotId';
const READ_SPOTS = '/spots';
const UPDATE_SPOT = '/spots/edit'
const DELETE_SPOT = '/spots/:spotId';
const CREATE_SPOT = '/spots/new'

export const createSpot = (spot) => async (dispatch) => {

    const { address, city, state, country, lat, lng, name,description, price, previewImage} = spot
 const data = await csrfFetch("/api/spots/", {
        method: "POST",
        body: JSON.stringify({
            address, city, state, country, lat, lng, name,description, price, previewImage
        }),
    });

    const response = await data.json()
    if(previewImage){
        dispatch(createSpotImage(previewImage, response.id))

    dispatch(createSpots(response))
    
return response 
};}


export const createSpotImage = (url, id) => async (dispatch) => {
 let preview;
    const data = await csrfFetch(`/api/spots/${id}/images`, {
        method: "POST",
        body: JSON.stringify({
            url, preview
            
            
            
        }),
    })
    const response = await data.json()
   
    return response
}
export const updateSpot = (spot) => async (dispatch) => {
    // dispatch = useDispatch()
    const { address, city, state, country, name, description, price, spotsId} = spot

    const data = await csrfFetch(`/api/spots/${spotsId}`, {
        method: "PUT",
        body: JSON.stringify({
            address, city, state, country, name,description, price
        }),
    });
    const response = await data.json()

    dispatch(updateSpots(response));
    return response
    
}
export const createSpots = (spot) =>({
    type: CREATE_SPOT,
    payload: spot

})
export const updateSpots = (spot) =>({
    type: UPDATE_SPOT,
    payload: spot
})
// export const createImage = (spot) =>({
//     type: CREATE_IMAGE,
//     payload: spot
// })

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
    