import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';

const fetchSpeakers = () => (
    fetch('//api.barcamp.am/speakers')
        .then(function(response) {
            return response.json();
        })
        .catch(function(err) {
            console.error(err);
        })
);

export function* speakersRequest() {
    yield takeEvery(actions.SPEAKERS_REQUEST, function*() {

        try {
            const schedule = yield call(fetchSpeakers);

            if(schedule.length > 0) {
                yield put({
                    type: actions.SPEAKERS_SUCCESS,
                    payload: schedule,
                });
            } else {
                yield put({ type: actions.SPEAKERS_ERROR });
            }
        } catch(err) {
            console.log(err);
            yield put({ type: actions.SPEAKERS_ERROR });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(speakersRequest)
    ]);
}
