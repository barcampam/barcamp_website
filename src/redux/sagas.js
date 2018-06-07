import { all } from 'redux-saga/effects';
import schedule from './schedule/saga';
import faq from './faq/saga';
import speakers from './speakers/saga';
import gallary from './gallary/saga';

export default function* rootSaga(getState) {
  yield all([
      schedule(),
      faq(),
      speakers(),
      gallary()
  ]);
}
