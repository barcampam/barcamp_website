import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';

const fetchGallary = () => (
    fetch('//api.barcamp.am/gallery')
        .then(function(response) {
            return response.json();
        })
        .catch(function(err) {
            console.error(err);
        })
);

export function* gallaryRequest() {
    yield takeEvery(actions.GALLARY_REQUEST, function*() {

        try {
            const gallary = yield call(fetchGallary);

            if(gallary.length > 0) {
                yield put({
                    type: actions.GALLARY_SUCCESS,
                    payload: gallary,
                });
            } else {
                yield put({ type: actions.GALLARY_ERROR });
            }
        } catch(err) {
            console.log(err);
            yield put({ type: actions.GALLARY_ERROR });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(gallaryRequest)
    ]);
}
