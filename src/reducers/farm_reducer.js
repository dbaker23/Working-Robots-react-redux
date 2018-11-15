//import { FETCH_FARM } from '../actions/index';

export default function( state=[], action ) {    
    switch( action.type ) {
        case 'FETCH_FARM':
            return [ action.payload.data, ...state ]; 
        default:
            return state;
    }
} 