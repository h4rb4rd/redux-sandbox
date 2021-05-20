import { actions } from './reducer';

export const incAC = () => {
  return {
    type: actions.INC,
  };
};
export const decAC = () => {
  return {
    type: actions.DEC,
  };
};
export const rndAC = (payload) => {
  return {
    type: actions.RND,
    payload,
  };
};
