export const actions = {
  INC: 'INC',
  DEC: 'DEC',
  RND: 'RND',
};

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case actions.INC:
      return state + 1;
    case actions.DEC:
      return state - 1;
    case actions.RND:
      return state + action.payload;
    default:
      return state;
  }
};
