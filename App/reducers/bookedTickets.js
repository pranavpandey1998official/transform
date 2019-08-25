import { BOOKED_TICKETS, AUTH } from '../actions/actionTypes';

initialState = [];

export default function bookedTickets(state = initialState, action) {
    switch(action.type) {
        case AUTH.LOGOUT:
            return initialState;
        case BOOKED_TICKETS.GET:
            return [
                ...action.bookedTickets
            ]
        case BOOKED_TICKETS.ADD:
            console.log('m')
            return [
                action.bookedTicket,
                ...state
            ]
        default :
            return state;
        }
}