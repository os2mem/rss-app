import {RootState} from '../store';

const getFeedState = (state: RootState) => state.feed;

const getFeedData = (state: RootState) => getFeedState(state).data;
const getFeedUi = (state: RootState) => getFeedState(state).ui;

const geLoading = (state: RootState) => getFeedUi(state).loading;
const getError = (state: RootState) => getFeedUi(state).error;

export default {
  getFeedData,
  getFeedUi,
  geLoading,
  getError,
};
