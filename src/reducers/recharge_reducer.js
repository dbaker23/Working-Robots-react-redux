
const initialState = {
    selected: false,
    robots: []
}
export default function( state=initialState, action ) {    
    switch( action.type ) {
        case 'FETCH_FARM':
            return [ action.payload.data, ...state ]; 
        default:
            return state;
    }
} 