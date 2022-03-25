import { combineReducers } from "redux";
import taskReducer from './taskReducer.js';
let rootReducer = combineReducers({
    taskReducer
});

export default rootReducer;