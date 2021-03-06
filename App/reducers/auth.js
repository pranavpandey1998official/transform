import { AUTH } from '../actions/actionTypes';

const initialState ={
    isAuthenticated: false,
    user: {},
    error: null
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH.LOGOUT:
            return initialState;
        case AUTH.LOGIN_SUCCESS: 
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    ...action.user
                },
                error: null   
            }
        case AUTH.ERROR:
            return{
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
     
}