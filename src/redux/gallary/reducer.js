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
        case actions.GALLARY_REQUEST:
            return new Map({
                loading: true,
                items: new List()
            });
        case actions.GALLARY_SUCCESS:
            return new Map({
                loading: false,
                items: new List(action.payload)
            });
        case actions.GALLARY_ERROR:
        default:
            return state;
    }
}
