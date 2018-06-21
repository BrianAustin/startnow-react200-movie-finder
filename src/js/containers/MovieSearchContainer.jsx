import React from 'react';

import {
  updateSearchText,
  searchClick
} from 'C:/Users/baust/oca/startnow-react200-movie-finder/src/js/actions/searchActions.js';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchText(value));
  }

  handleSearchClick() {
    const { searchText, dispatch } = this.props;
    if(searchText == '') {
      return alert('Do you really want us to search for nothing? No. You do not. Provide at least two letters you fine looking human!');
    } else {
      dispatch(searchClick(searchText));
    }
  }

  render() {
    const searchText = this.props.searchText;
    let toDisplay;

    if(this.props.movies != null) {
      toDisplay = 
        <div className='col-md-12'>
          <h1 className='text-center'>Movie Finder</h1>
          {/* Search bar start below */}
          <div className='input-group mb-4'>
            <input
              type='text'
              className='form-control'
              maxLength='30'
              placeholder='Enter a movie title'
              aria-label='Enter a movie title'
              aria-describedby='basic-addon2'
              onChange={this.handleSearchInput}
            />
            <div className='input-group-append'>
              <button
                className='btn text-black search-button'
                type='button'
                value={searchText}
                onClick={this.handleSearchClick}
              >Go!
            </button>
            </div>
          </div>
          {/* Search bar end above */}
          {/* search result display card start below */}
          {this.props.movies.map(movie =>
              <div className='card col-md-3'>
                <img className='card-img-top' width='200px' height='300px'
                  alt='movie poster'
                  src={movie.Poster}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{movie.Title}</h5>
                  <p className='card-text'>{movie.Year}</p>

                  <button className='btn btn-primary'
                    type='button'
                  >More Info</button>
                </div>
              </div>
          )}
          {/* search result display card end above */}

          {/* Holding div end below   */}
        </div>;
    } else {
      toDisplay = 
        <div className='col-md-12'>
          <h1 className='text-center'>Movie Finder</h1>
          {/* Search bar start below */}
          <div className='input-group mb-4'>
            <input
              type='text'
              className='form-control'
              maxLength='30'
              placeholder='Enter a movie title'
              aria-label='Enter a movie title'
              aria-describedby='basic-addon2'
              onChange={this.handleSearchInput}
            />
            <div className='input-group-append'>
              <button
                className='btn text-black search-button'
                type='button'
                value={searchText}
                onClick={this.handleSearchClick}
              >Go!
            </button>
            </div>
          </div>
          {/* Search bar end above */}
          {/* Holding div end below   */}
        </div>
    ;}

    return (
      toDisplay
    );
  }
}

export default MovieSearchContainer;