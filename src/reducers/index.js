import {combineReducers} from 'redux';
import timeTableReducer from "./timeTableReducer"

const rootReducer = combineReducers({
    state: (state = {}) => state,
    timeTableState: timeTableReducer
});

export default rootReducer;
