import merge from 'lodash/merge';

import { UPDATE_FILTER } from './actions';

export const DEFAULT_TIME = 420;

const defaultState = Object.freeze({
  start: DEFAULT_TIME, // in minutes, later from midnight.
  finish: DEFAULT_TIME, // in minutes
  date: "2017-07-15",
  loaded: false,
});

const Reducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_FILTER:
      return merge({}, state, action.filters);

    default:
      return defaultState;
  }
};

export default Reducer;