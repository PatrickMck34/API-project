import { csrfFetch } from './csrf'; 

const READ_BOOKING = '/bookings'
const DELETE_BOOKING = '/bookings/:bookingId';
const CREATE_BOOKING = '/bookings/new'
const READ_BOOKINGS = '/bookings/spotsid'

export const createBookings = (Bookings) => async (dispatch) => {
    const {startDate, endDate, spotId} = Bookings
 const data = await csrfFetch(`/api/spots/${spotId}/bookings` , {
        method: "POST",
        body: JSON.stringify({
           startDate, endDate
        }),
    });
    const response = await data.json()
    
    dispatch(createBooking(response))
    return response
}

export const createBooking = (Booking) =>({
    type: CREATE_BOOKING,
    payload: Booking
})
export const getBookingsSpot = (spotId) => async (dispatch) => {
const data = await csrfFetch(`/api/spots/${spotId}/bookings`)
    const response = await data.json()
    dispatch(getBookingSpot(response))
    return response
}
export const getBookingSpot = (Booking) =>({
    type: READ_BOOKING,
    payload: Booking
})
export const getBookingsUser = (spotId) => async (dispatch) => {
    const data = await csrfFetch(`/api/bookings/current`)
        const response = await data.json()
        dispatch(getBookingUser(response))
        return response
    }
    export const getBookingUser = (Booking) =>({
        type: READ_BOOKING,
        payload: Booking
    })
export const deleteBookings = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: 'DELETE',
    });
    dispatch(deleteBooking(id));
    return response;
};
export  const deleteBooking = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        bookingId
    };
};

const initialState =  {User:{}, Spot: {}}
export const bookingsReducer = (state = initialState, action) => {
    let newState = {}
    
    switch (action.type) {
               case CREATE_BOOKING:
                 newState = { User:{...state.User}} 
                newState.User[action.payload.id] = action.payload
                return newState

                case READ_BOOKING:
                 newState ={User: {} };
                 action.payload.Bookings.forEach(Bookings => newState.User[Bookings.id] = Bookings)
                return newState

                case READ_BOOKINGS:
                 newState ={Spot: {} };
                 action.payload.Bookings.forEach(Bookings => newState.Spot[Bookings.id] = Bookings)
                return newState 

                case DELETE_BOOKING:
             newState = {...state}
             delete newState[action.payload]
            
      default:
    return state
}}
export default bookingsReducer