import {createReducer} from '@reduxjs/toolkit';
import actions from '../actionCreators';
import initialState from '../initial.state';

const data = createReducer(initialState.data, builder => {
  builder.addCase(actions.setData, (state, action) => {
    return action.payload.data as Array<any>;
  });
});

export default data;
