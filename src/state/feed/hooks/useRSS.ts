import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';

import actions from '../actionCreators';
import selectors from '../selectors';

const useRSS = () => {
  const dispacth = useAppDispatch();
  const data = useAppSelector(selectors.getFeedData);
  const loading = useAppSelector(selectors.geLoading);
  const error = useAppSelector(selectors.getError);

  const state = useAppSelector(state => state.feed);
  console.log({state});

  const loadFeed = React.useCallback(() => {
    dispacth(actions.loadFeed());
  }, [dispacth]);

  React.useEffect(() => {
    loadFeed();
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useRSS;
