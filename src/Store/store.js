import { createStore } from 'redux';

const initialState = {
  inputValue: '',
  errorForInput: false,
  alignment: '',
};

function reducer(state = initialState) {
  return state;
}

export const store = createStore(reducer);
