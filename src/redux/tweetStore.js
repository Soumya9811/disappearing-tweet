import {createStore} from 'redux';
import { tweetReducer } from '../redux/tweetReducers';
const store = createStore(tweetReducer);

export default store;