import { ROUTE } from './actionTypes';
import { GET } from '../lib/Api';

export function getRoutes() {
    return async(dispatch) => {
        try {
            const routes = await GET('routes');
            dispatch(getRoutesSync(routes));
        } catch(e) {
            console.log('get_routes', e);
        }
    } 
}

function getRoutesSync (routes) {
    return {
        type: ROUTE.SET,
        routes: routes
    }
}