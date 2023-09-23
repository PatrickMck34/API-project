import { csrfFetch } from './csrf';
import { useHistory } from 'react-router-dom';

const READ_TREE = '/spots/:spotId';
const READ_TREES = '/spots';
const UPDATE_TREE = '/spots/edit'
const DELETE_TREE = '/spots/:spotId';
const CREATE_TREE = '/spots/new'

export const createTree = (tree) => async (dispatch) => {
    const { number, location, forSurvivor, message} = tree
    const data = await csrfFetch("/api/spots/", {
        method: "POST",
        body: JSON.stringify({
            number, location, forSurvivor, message
        }),
    });

    const response = await data.json()
dispatch(createTrees(response))
return response
;}


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
export const createTrees = (spot) =>({
    type: CREATE_TREE,
    payload: spot

})
export const updateSpots = (spot) =>({
    type: UPDATE_TREE,
    payload: spot
})
// export const createImage = (spot) =>({
//     type: CREATE_IMAGE,
//     payload: spot
// })

export const getTrees = (id) => async (dispatch) => {
    const data = await csrfFetch("/api/spots/")
    const spots = await data.json()
    
    dispatch(readTrees(spots))
    console.log(spots.Spots)
    return spots
    
    //    if(response.ok){
    }
    
    
    
    export const getTree = (treeId) => async (dispatch) => {
        const data = await csrfFetch(`/api/spots/${treeId}`)
        
        const spot = await data.json()
       console.log(spot)
        dispatch(readTree(spot))
        
    }
    
    
    export const readTrees = (spots) =>({
        type: READ_TREES,
        payload: spots
    })
    export const readTree = (spot) =>({
        type: READ_TREE,
       payload: spot
    })
    
    export const deleteTrees = (id) => async (dispatch) => {
        const response = await csrfFetch(`/api/spots/${id}`, {
            method: 'DELETE',
        });
        dispatch(deleteTree(id));
        return response;
    };
  export  const deleteTree = (spotId) => {
        return {
            type: DELETE_TREE,
            spotId
        };
    };
    const initialState =  {allTrees:{}, singleTree:{}}
    export const spotsReducer = (state = initialState, action) => {
        let newState = {}
        
        switch (action.type) {
            case READ_TREES:
                newState = {...state, allTrees:{}}
               
                action.payload.forEach(spot => newState.allTrees[spot.id] = spot)
                return newState 
        

            case READ_TREE:
                 newState ={...state, singleTree: {} };
                newState.singleTree = action.payload
                return newState 
            
            
            case CREATE_TREE:
                 newState = { allTrees:{ ...state.allTrees}}
                
                newState.allTrees[action.payload.id] = action.payload
                return newState
                
      
             case DELETE_TREE:
             newState = {...state}
             delete newState[action.payload.id]
          

            case UPDATE_TREE:
            newState = {...state, allTrees:{ ...state.allTrees}}
            newState.allTrees[action.payload.id] = action.payload
            return newState
            default:
            return state;
        }
    }
    
    
    export default spotsReducer;
    