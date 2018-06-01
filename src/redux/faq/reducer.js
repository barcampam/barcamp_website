import { Map } from 'immutable';
import { getToken } from '../../helpers/utility';
import actions from './actions';

const initState = new Map({
  
});

export default function faqReducer(
  action
) {
  switch (action.type) {
    case actions.FAQ_SUCCESS:
      return state.set('idToken', action.token);
    default:
      return state;
  }
}
