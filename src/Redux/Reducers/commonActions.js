import {THEME} from '../Types';
import {appDefaultReducer} from './Default';
const INITIAL_STATE = appDefaultReducer.theme;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME: {
      return {...state, theme: action.payload};
    }
    default:
      return state;
  }
};
