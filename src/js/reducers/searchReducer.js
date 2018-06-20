const defaultState = {
  searchText: ''
};

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'MONKEYS': {
      return {
        state
      };
    }

    default: {
      return state;
    }
  }
}