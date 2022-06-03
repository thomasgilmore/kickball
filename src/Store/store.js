import { createStore } from 'redux';

const initialState = {
  amount: '12.00',
};

function reducer(state = initialState) {
  return state;
}

export const store = createStore(reducer);
