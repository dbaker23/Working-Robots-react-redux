import { combineReducers } from 'redux';
import AreaReducer from './area_reducer';
import RechargeReducer from './recharge_reducer';

const rootReducer = combineReducers({
    area: AreaReducer,
    recharge: RechargeReducer
});

export default rootReducer;