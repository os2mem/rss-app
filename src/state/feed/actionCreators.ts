import {createAction} from '@reduxjs/toolkit';
import actionTypes from './actionTypes';

const loadFeed = createAction(actionTypes.loadFeed$, () => ({payload: null}));
const setData = createAction(actionTypes.SET_DATA, (data: Array<any>) => ({
  payload: {data},
}));
const setLoading = createAction(
  actionTypes.SET_LOADING,
  (loading: Boolean) => ({payload: loading}),
);
const setError = createAction(actionTypes.SET_ERROR, (error: string) => ({
  payload: error,
}));

export default {
  loadFeed,
  setData,
  setLoading,
  setError,
};
