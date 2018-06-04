import { Map, List } from 'immutable';
import actions from './actions';

const initState = new Map({
    loading: false,
    items: new List()
});

export default function scheduleReducer(
    state = initState, action
) {
    switch (action.type) {
        case actions.SCHEDULE_REQUEST:
            return new Map({
                loading: true,
                items: new List()
            });
        case actions.SCHEDULE_SUCCESS:
            return new Map({
                loading: false,
                items: new List(action.payload)
            });
        case actions.SCHEDULE_ERROR:
        default:
            return initState;
    }
}
