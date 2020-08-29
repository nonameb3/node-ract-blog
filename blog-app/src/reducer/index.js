export const initialState = {
  auth: null,
  cards: [],
};

export default (state, action) => {
  switch (action.type) {
    case 'setauth':
      return { ...state, auth: action.payload };
    case 'setcards':
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};
