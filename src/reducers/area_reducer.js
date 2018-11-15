//import { FETCH_FARM } from '../actions/index';

const initialArea = { selected: false, robots: [] };
const initialState = {
    field: initialArea,
    farm: initialArea,
    house: initialArea,
    storehouse: initialArea
}

export default function( state=initialState, action ) {    
    switch( action.type ) {
        case 'FETCH_FARM':
            return [ action.payload.data, ...state ]; 
        default:
            return state;
    }
} 