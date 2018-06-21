const defaultState = {
  searchText: '',
  pending: false,
  movies: null
};

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'UPDATE_SEARCH_TEXT': {
      return {
        ...state,
        searchText: payload.searchText
      };
    }

    case 'SEARCH_CLICK_PENDING': {
      return {
        ...state,
        pending: true
      }
    }

    case 'SEARCH_CLICK_FULFILLED': {
      return {
        ...state,
        pending: false,
        movies: payload.Search
      };
    }

    case 'SEARCH_CLICK_REJECTED': {
      return {
        ...state,
        pending: false
      };
    }

    default: {
      return state;
    }
  }
}