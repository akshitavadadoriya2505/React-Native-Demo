import {combineReducers} from 'redux';
import ThemeReducer from './commonActions';

const appReducer = combineReducers({
  theme: ThemeReducer,
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);
  // if (action.type === RESET_STORE) {
  //   let defaultReducer = appDefaultReducer;
  //   defaultReducer.profile.currentLocation = finalState.profile.currentLocation;
  //   finalState = defaultReducer; //resetReducer(finalState, action);
  // }
  return finalState;
}
