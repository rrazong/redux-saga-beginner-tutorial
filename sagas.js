import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* watchIncrementAsync() {
  console.log('called watch');
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

export function* incrementAsync(action) {
  console.log('called inc async, action:  ', action);
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
