export const initialState = {
  auth: null,
  cards: [],
};

function updateCard(newcard, cards = []) {
  const cardsclone = [...cards];
  const old = cards.findIndex((card) => card._id === newcard._id);
  cardsclone[old] = newcard;
  return cardsclone;
}

export default (state, action) => {
  switch (action.type) {
    case 'setauth':
      return { ...state, auth: action.payload };
    case 'setcards':
      return { ...state, cards: action.payload };
    case 'updatecard':
      return { ...state, cards: updateCard(action.payload, state.cards) };
    default:
      return state;
  }
};
