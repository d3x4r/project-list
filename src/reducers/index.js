const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return action.payload + 1;
    case 'DEC':
      return action.payload - 1;
    default:
      return state;
  }
};

export default reducer;
