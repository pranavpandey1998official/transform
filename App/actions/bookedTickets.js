import { BOOKED_TICKETS } from './actionTypes';
import { GET } from '../lib/Api';



export function getBookedTickets() {
    return async(dispatch, getState) => {
        try {
            const bookedTickets = await GET('tickets?userId='+getState().auth.user._id);
            dispatch(getBookedTicketsSync(bookedTickets));
            console.log(bookedTickets);
        } catch(e) {
            console.log('get_booked_tickets', )
        }
    }
}

function getBookedTicketsSync(bookedTickets) {
    return {
        type: BOOKED_TICKETS.GET,
        bookedTickets
    }
}

export function addToBookedTickets(bookedTicket) {
    return {
        type: BOOKED_TICKETS.ADD,
        bookedTicket
    }
}