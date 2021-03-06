import types from './types.js';

const defaultState = {
  isChecked: false,
  sportingGood: {
    title: null,
  },
  owner: {
    coordinates: {}
  },
  renter: {

  },
  agreedToTerms: false
}

export default (state = defaultState, { type, payload }) => {

  switch(type) {
    case types.SET_RENTAL:
      return { ...state, ...payload };
    case types.CLEAR_RENTAL:
      return defaultState;
    case types.AGREE_TO_RENTAL_TERMS:
      return { ...state, agreedToTerms: true }
    default:
      return state;
  }

}
