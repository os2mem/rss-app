import {put, takeLatest, call} from 'redux-saga/effects';

import {TakeableChannel} from 'redux-saga';

import fecthRSS from './utils/fetchRSS';

import actions from './actionCreators';
import actionTypes from './actionTypes';
import provider from './provider';

export function* handleLoadFeed() {
  try {
    yield put(actions.setLoading(true));
    const {data, error} = yield call(fecthRSS, provider.url);
    if (error) {
      yield put(actions.setError(error));
      return;
    }
    yield put(actions.setData(provider.adapter(data)));
  } catch (error) {
    console.error('Error::handleLoadFeed', {error});
    yield put(actions.setError(error));
  } finally {
    yield put(actions.setLoading(false));
  }
}

export default function* () {
  yield takeLatest(
    actionTypes.loadFeed$ as unknown as TakeableChannel<unknown>,
    handleLoadFeed,
  );
}
