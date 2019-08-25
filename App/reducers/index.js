import { combineReducers } from 'redux';

import auth from './auth';
import routes from './routes';
import bookedTickets from './bookedTickets';

export default combineReducers({
    auth,
    routes,
    bookedTickets
})