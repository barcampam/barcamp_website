import {SPEAKER_SPECIAL_TYPE} from "../actions/GuestsAction"


export default function (state = {}, action) {
    switch (action.type) {
        case SPEAKER_SPECIAL_TYPE:
            return action.payload.data
        default:
            return state
    }
}




