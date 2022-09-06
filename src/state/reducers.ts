import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import feed from './feed/reducers';

const feedPersistorConfig = {
  key: 'feed',
  storage: AsyncStorage,
  blacklist: ['ui'],
};

export default combineReducers({
  feed: persistReducer(feedPersistorConfig, feed),
});
