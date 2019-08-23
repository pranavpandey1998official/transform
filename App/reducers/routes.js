import { ROUTE } from '../actions/actionTypes';

const initialState = [];
export default function routes( state = initialState, action) {
    switch (action.type) {
        case ROUTE.SET:
        console.log('m');
            return action.routes;
        default : 
            return state;
    }
}