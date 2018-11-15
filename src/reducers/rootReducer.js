import { combineReducers } from 'redux';
import FarmReducer from './farm_reducer';
import FieldReducer from './field_reducer';
import HouseReducer from './house_reducer';
import RechargeReducer from './recharge_reducer';
import StorehouseReducer from './storehouse_reducer';

const rootReducer = combineReducers({
    field: FieldReducer,
    farm: FarmReducer,
    house: HouseReducer,
    recharge: RechargeReducer,
    storehouse: StorehouseReducer
});

export default rootReducer;