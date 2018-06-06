// import { Map } from 'immutable';
// import actions from './actions';

// const initState = new Map({
  
// });

// export default function faqReducer(
//   action
// ) {
//   switch (action.type) {
//     case actions.FAQ_SUCCESS:
//       return initState;
//     default:
//       return initState;
//   }
// }


import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
    loading: false
});

export default function faqReducer(
    state = initState, action
) {
    switch (action.type) {
        case actions.FAQ_REQUEST:
            return new Map({
                loading: true
            });
        case actions.FAQ_SUCCESS:
            return new Map({
                loading: false
            });
        case actions.FAQ_ERROR:
        default:
            return initState;
    }
}
