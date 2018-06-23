import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    searchText: store.search.searchText,
    pending: store.search.pending,
    movies: store.search.movies,
    moreInfoPending: store.search.moreInfoPending,
    detailMovies: store.search.detailMovies
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);