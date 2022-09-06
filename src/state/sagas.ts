import {all, fork} from 'redux-saga/effects';

import feed from './feed/sagas';

export default function* rootSaga() {
  yield all([fork(feed)]);
}
