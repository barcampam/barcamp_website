import {LIVE_STREAM} from "../actions/liveStreamAction"

export default function (state = {}, action) {

    switch (action.type) {
        case LIVE_STREAM:
            return action.payload
        default:
            return state
    }
}