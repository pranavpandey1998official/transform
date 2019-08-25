import { ROUTE, AUTH } from '../actions/actionTypes';

const initialState = [];
export default function routes( state = initialState, action) {
    switch (action.type) {
        case AUTH.LOGOUT:
            return initialState;
        case ROUTE.SET:
            return action.routes;
        default : 
            return state;
    }
}