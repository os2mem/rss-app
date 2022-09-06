import {createReducer} from '@reduxjs/toolkit';
import actions from '../actionCreators';
import initialState from '../initial.state';

const ui = createReducer(initialState.ui, builder => {
  builder
    .addCase(actions.setLoading, (state, action) => {
      state.loading = action.payload as boolean;
    })
    .addCase(actions.setError, (state, action) => {
      state.error = action.payload as string;
    });
});

export default ui;
