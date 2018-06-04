import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';

const fetchSchedule = () => (
    fetch('//api.barcamp.am/schedule')
        .then(function(response) {
            return response.json();
        })
        .catch(function(err) {
            console.error(err);
        })
);

export function* scheduleRequest() {
    yield takeEvery(actions.SCHEDULE_REQUEST, function*() {

        try {
            const schedule = yield call(fetchSchedule);

            if(schedule.length > 0) {
                yield put({
                    type: actions.SCHEDULE_SUCCESS,
                    payload: schedule,
                });
            } else {
                yield put({ type: actions.SCHEDULE_ERROR });
            }
        } catch(err) {
            console.log(err);
            yield put({ type: actions.SCHEDULE_ERROR });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(scheduleRequest)
    ]);
}
