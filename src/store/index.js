import { combineReducers } from 'redux';
import Countries from './countries/reducer';

const rootReducer = combineReducers({
	countries: Countries, 
});

export default rootReducer;