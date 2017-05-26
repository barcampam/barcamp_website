import {combineReducers} from 'redux';
import timeTableReducer from "./timeTableReducer"
import SpeakerReducer from "./SpeakerReducer"
import SpeakerAllReducer from "./speakerAllreducer"
import GusetsReducer from "./GuestsReducer"
import LiveStreamReducer from "./liveStreamReducer"
import faqReducer from "./faqReducer"

const rootReducer = combineReducers({
    state: (state = {}) => state,
    timeTableState: timeTableReducer,
    speakers: SpeakerReducer,
    speakersAll: SpeakerAllReducer,
    guests: GusetsReducer,
    liveStream: LiveStreamReducer,
    faqMail:faqReducer
});

export default rootReducer;
