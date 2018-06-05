import { Map, List } from 'immutable';
import actions from './actions';

const initState = new Map({
    loading: false,
    items: new List()
});

export default function speakersReducer(
    state = initState, action
) {
    switch (action.type) {
        case actions.SPEAKERS_REQUEST:
            return new Map({
                loading: true,
                items: new List()
            });
        case actions.SPEAKERS_SUCCESS:
            return new Map({
                loading: false,
                items: new List(action.payload)
            });
        case actions.SPEAKERS_ERROR:
        default:
            return state;
    }
}
