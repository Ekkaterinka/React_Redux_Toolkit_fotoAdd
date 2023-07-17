import { addImage} from './actions'
import { createReducer } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initState = {
  list: []
};

const dataReducer = createReducer(initState, (builder) => {
  builder.addCase(addImage, (state, action) => {
    state.list.push({
      id: uuid(),
      src: action.payload,
    });
  });
});

export default dataReducer;