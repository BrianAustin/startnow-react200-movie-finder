const defaultState = {
  searchText: '',
  pending: false,
  movies: null,
  moreInfoPending: false,
  detailMovies: null
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

    case 'MORE_INFO_CLICK_PENDING': {
      return {
        ...state,
        moreInfoPending: true
      };
    }

    case 'MORE_INFO_CLICK_FULFILLED': {
      return {
        ...state,
        moreInfoPending: false,
        detailMovies: payload
      };
    }

    case 'MORE_INFO_CLICK_REJECTED': {
      return {
        ...state,
        moreInfoPending: false
      };
    }

    default: {
      return state;
    }
  }
}