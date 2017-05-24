import {SPEAKER_TYPE} from "../actions/SpeakerAction"


export default function (state = {}, action) {
    switch (action.type) {
        case SPEAKER_TYPE:
            return action.payload.data.splice(8,8)
        default:
            return state
    }
}




