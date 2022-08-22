export const increase = () => {
  return {
    type: 'INCREASE',
  };
};

export const decrease = () => {
  return {
    type: 'DECREASE',
  };
};

const count = 1;

const counterReducer = (state = count, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;

    case 'DECREASE':
      return state - 1;

    case 'SET_NUMVER':
      return action.payload;

    default:
      return state;
  }
};

export default counterReducer;
