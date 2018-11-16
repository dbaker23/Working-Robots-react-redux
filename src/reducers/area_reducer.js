import { SELECT_AREA } from '../actions/index';
import { SELECTED, UNSELECTED } from '../styles/constants';

const initialArea = {    
    isSelected: UNSELECTED,
    robots: [] 
};

const initialState = {
    selected: '',
    field: initialArea,
    farm: initialArea,
    house: initialArea,
    storehouse: initialArea
}

export default function( state=initialState, action ) {        
    switch( action.type ) {
        case SELECT_AREA:        
            state.selected = state.selected === action.payload? '' : action.payload;            
            console.log( 'action', state );
            return state; 
        default:
            return state;
    }
} 