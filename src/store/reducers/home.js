import { HomeActionTypes } from '@actions';

const INITIAL_STATE = {
  home: {
    version: 1
  }
};

export const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.SetReducer:
      return {
        ...state,
        ...action.payload
      };

    case HomeActionTypes.ResetReducer:
      return INITIAL_STATE;

    default:
      return state;
  }
};
