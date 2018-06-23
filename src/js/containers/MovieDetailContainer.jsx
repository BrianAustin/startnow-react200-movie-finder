import React from 'react';
import { Link } from 'react-router-dom';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentlyDisplaying;

    if(this.props.moreInfoPending === true) {
      currentlyDisplaying = 
        <div>Patience...</div>
    } else {
        currentlyDisplaying = 
        <div>
        <div className='col-md-12'>
          <h1 className='text-center text-white display-4'>Movie Finder</h1>
          <p className='text-center text-white lead'>Details on {this.props.detailMovies.Title}</p>
          <hr />
          <Link to={`/`}>
            <button className='btn btn-link col-md-2 mb-5 offset-md-1'><strong>Back to Search</strong></button>
          </Link>
        </div>  
        <div className='col-md-10 offset-md-1'>  
          <div className='row'>
            <div className='col-md-5'>
              <img className='float-right border border-dark' height='450px' width='300px' src={this.props.detailMovies.Poster} alt='movie poster' />
            </div>
            <div className='col-md-5'>
              <div className='card border border-dark'>
                <div className='card-header'>Movie Details</div>
                <div className='card-body'>
                  <h5 className='card-title'>{this.props.detailMovies.Title}</h5>
                  <div className='row'>
                    <span className='badge badge-success ml-3 mr-2'>{this.props.detailMovies.Year}</span>
                    <span className='badge badge-success ml-2 mr-2'>{this.props.detailMovies.Runtime}</span>
                    <span className='badge badge-success ml-2'>{this.props.detailMovies.Genre}</span>
                  </div>
                  <br />
                  <div className='row'>
                    <p className='card-text'>{this.props.detailMovies.Plot}</p> 
                  </div>
                  <br />
                  <div className='row'>
                    <h6 className='card-text'><strong>Awards</strong></h6>
                  </div>
                  <div className='row'>
                    <p className='card-text'>{this.props.detailMovies.Awards}</p>
                  </div>
                  <br />
                  <div className='row'>
                    <p className='card-text'><strong>IMDB</strong>: {this.props.detailMovies.Ratings[0].Value}</p>
                  </div>  
                </div>
              </div>
            </div>
          {/* row div end below */}
          </div>

        </div>
      {/* closing div tag below   */}  
      </div>    
    }

    return (
      currentlyDisplaying
    );
  }
}

export default MovieDetailContainer;