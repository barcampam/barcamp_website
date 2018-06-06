import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import { message } from 'antd';

const fetchFaq = () => (
  fetch('//api.barcamp.am/feedback')
      .then(function(response) {
          return response.json();
      })
      .catch(function(err) {
          console.error(err);
      })
);

export function* faqRequest() {
  yield takeEvery('FAQ_REQUEST', function*() {
    try {
      const faq = yield call(fetchFaq);
  } catch(err) {
      console.log(err);
      yield put({ type: actions.SCHEDULE_ERROR });
  }
  });
}

export default function* rootSaga() {
  yield all([
    fork(faqRequest)
  ]);
}
