import { csrfFetch } from './csrf';
// import useFetch from 'react-fetch-hooks'
const GET_ALL_SPOTS = '/api/spots'

export const loadSpots = (spots) => async (dispatch)=>{
    const response = await csrfFetch(GET_ALL_SPOTS, {
        method: 'GET'
}) 
    
}
// export default function AllSpots(){
//  const allSpots = {}
// const {loading, error, data = [] } = useFetch('https://api/spots', options, [])
// return (
// <>
//     <h1> Spots List</h1>
// {spotsList?.map(({id, message}) => (
//     <p key={id}>{message}</p>
// ))}
// </>
// )}
// if ({allSpots}) return console.log("allspots")

export const getAllSpots = () => async (dispatch) =>{
    const response = await fetch('/api/spots');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadSpots(data))
        return data
    }
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_SPOTS: {
            const newState = {};
            action.tweets.forEach((spot) => (newState[spot.id] = spot));
            return newState
        }
        default: return state
    }
}

export default spotsReducer

// export const removeSpot = () => async (dispatch) => {
//     const response = await csrfFetch('/api/session', {
//       method: 'DELETE',
//     });
//     dispatch(removeUser());
//     return response;
//   };

  
// const SET_USER = 'session/setUser';
// const REMOVE_USER = 'session/removeUser';
// export const signup = (user) => async (dispatch) => {
//     const { username, firstName, lastName, email, password } = user;
//     const response = await csrfFetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({
//         username,
//         firstName,
//         lastName,
//         email,
//         password,
//       }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
//   };

// export const restoreUser = () => async dispatch => {
//     const response = await csrfFetch('/api/session');
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
//   };

// const setUser = (user) => {
//   return {
//     type: SET_USER,
//     payload: user,
//   };
// };

// const removeUser = () => {
//   return {
//     type: REMOVE_USER,
//   };
// };

// export const login = (user) => async (dispatch) => {
//   const { credential, password } = user;
//   const response = await csrfFetch('/api/session', {
//     method: 'POST',
//     body: JSON.stringify({
//       credential,
//       password,
//     }),
//   });
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return response;
// };

// const initialState = { user: null };

// const sessionReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case SET_USER:
//       newState = Object.assign({}, state);
//       newState.user = action.payload;
//       return newState;
//     case REMOVE_USER:
//       newState = Object.assign({}, state);
//       newState.user = null;
//       return newState;
//     default:
//       return state;
//   }
// };

// export default sessionReducer;
// ...