import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
  return {
    searchText: store.search.searchText,
    moreInfoPending: store.search.moreInfoPending,
    detailMovies: store.search.detailMovies
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);