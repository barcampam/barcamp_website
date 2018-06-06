import { all } from 'redux-saga/effects';
import schedule from './schedule/saga';
import faq from './faq/saga';

export default function* rootSaga(getState) {
  yield all([
      schedule(),
      faq()
  ]);
}
