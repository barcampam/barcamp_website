import { all } from 'redux-saga/effects';
import schedule from './schedule/saga';

export default function* rootSaga(getState) {
  yield all([
      schedule()
  ]);
}
