import { combineReducers } from 'redux';
import places from './places';
import account from './account';

const rootReducer = combineReducers({
		places: places,
		account: account
	});

export default rootReducer;