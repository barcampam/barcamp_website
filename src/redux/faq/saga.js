import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';

const fetchFaq = (form) => (
  fetch('//api.barcamp.am/feedback', {
      method: 'POST',
      body: form,
  })
      .then(function(response) {
          return response.json();
      })
      .catch(function(err) {
          console.error(err);
      })
);

export function* faqRequest() {
  yield takeEvery('FAQ_REQUEST', function*(action) {
    try {
        const formData = new FormData();

        formData.append("email", action.email);
        formData.append("body", action.text);

        const faq = yield call(fetchFaq, formData);
        const res = JSON.parse(faq);

        if(res.response === "ok") {
            yield put({type: actions.FAQ_SUCCESS});
        } else {
            yield put({ type: actions.FAQ_ERROR });
        }
  } catch(err) {
      console.log(err);
      yield put({ type: actions.FAQ_ERROR });
  }
  });
}

export default function* rootSaga() {
  yield all([
    fork(faqRequest)
  ]);
}
