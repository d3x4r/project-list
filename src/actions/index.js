const increment = (number) => {
  return {
    type: 'INC',
    payload: number,
  };
};

const decrement = (number) => {
  return {
    type: 'DEC',
    payload: number,
  };
};

export { increment, decrement };
