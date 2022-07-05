import { createStore, combineReducers } from 'redux';
import {drawerReducer} from './drawerreducer';

const reducer = combineReducers({
	drawerReducer: drawerReducer,
	
});

const store = createStore(reducer);

export default store;