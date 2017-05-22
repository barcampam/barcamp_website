import {combineReducers} from 'redux';
import timeTableReducer from "./timeTableReducer"
import SpeakerReducer from "./SpeakerReducer"
import SpeakerAllReducer from "./speakerAllreducer"

const rootReducer = combineReducers({
    state: (state = {}) => state,
    timeTableState: timeTableReducer,
    speakers:SpeakerReducer,
    speakersAll:SpeakerAllReducer
});

export default rootReducer;
