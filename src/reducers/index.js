import { combineReducers } from 'redux';
import noodles from './noodles';
import images from './images';

const reducers = combineReducers({
		noodles,
	  images
});

export default reducers;
