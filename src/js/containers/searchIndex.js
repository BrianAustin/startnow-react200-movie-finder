import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
  return {
    searchText: store.search.searchText,
    pending: store.search.pending,
    movies: store.search.movies
  };
}

export default connect(mapStoreToProps)(MovieSearchContainer);