import {SPEAKER_ALL_TYPE} from "../actions/SpeakerAllAction"


export default function (state = {}, action) {
    switch (action.type) {
        case SPEAKER_ALL_TYPE:
            return action.payload.data
        default:
            return state
    }
}




