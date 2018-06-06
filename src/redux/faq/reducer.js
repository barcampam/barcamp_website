import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
    loading: false,
    success: false
});

export default function faqReducer(
    state = initState, action
) {
    switch (action.type) {
        case actions.FAQ_REQUEST:
            return new Map({
                loading: true,
                success: false
            });
        case actions.FAQ_SUCCESS:
            return new Map({
                loading: false,
                success: true
            });
        case actions.FAQ_ERROR:
            return new Map({
                loading: false,
                success: true
            });
        default:
            return initState;
    }
}
