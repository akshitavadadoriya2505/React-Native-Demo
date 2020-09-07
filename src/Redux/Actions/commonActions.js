import {THEME} from '../Types';

export const toggleTheme = (theme) => {
  return async (dispatch) => {
    dispatch({
      type: THEME,
      payload: theme,
    });
    return Promise.resolve(true);
  };
};
