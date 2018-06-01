import { all, takeEvery, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { clearToken } from '../../helpers/utility';
import actions from './actions';

export function* faqRequest() {
  yield takeEvery('FAQ_REQUEST', function*() {
    if (status=200) {
      yield put({
        type: actions.FAQ_SUCCESS,
        token: 'secret token',
        profile: 'Profile',
      });
    } else {
      yield put({ type: actions.FAQ_ERROR });
    }
  });
}

export function* faqSuccess() {
  yield takeEvery(actions.FAQ_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token);
  });
}

export function* faqError() {
  yield takeEvery(actions.FAQ_ERROR, function*() {

  });
}

export default function* rootSaga() {
  yield all([
    fork(faqRequest),
    fork(faqSuccess),
    fork(faqError)
  ]);
}
