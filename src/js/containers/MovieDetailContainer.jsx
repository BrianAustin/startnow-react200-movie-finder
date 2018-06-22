import React from 'react';

import {
  moreInfoClick
} from 'C:/Users/baust/oca/startnow-react200-movie-finder/src/js/actions/searchActions.js';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='col-md-12'>
          <h1 className='text-center text-white display-4'>Movie Finder</h1>
          <p className='text-center text-white lead'>Details on...(insert movie title)</p>
          <button className='btn btn-link col-md-2 mb-5 offset-md-1'>Back to Search</button>
        </div>  
        <div className='col-md-10 offset-md-1'>  
          <div className='row'>
            <div className='col-md-5'>
              <img className='float-right' height='450px' width='300px' src='https://images-na.ssl-images-amazon.com/images/M/MV5BZWE2ZmVlMDUtYjU5Yy00ZDY2LThkMjItMDcyZmRiYjdmYmIxXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg' alt='movie poster' />
            </div>
            <div className='col-md-5'>
              <div className='card'>
                <div className='card-header'>Movie Details</div>
                <div className='card-body'>
                  <h5 className='card-title'>Movie Name!!!!!!</h5>
                  <div className='row'>
                    <span className='badge badge-success ml-2 mr-2'>Released YEAR</span>
                    <span className='badge badge-success ml-2 mr-2'>runtime</span>
                    <span className='badge badge-success ml-2'>genre(s)</span>
                  </div>
                  <br />
                  <div className='row'>
                    <p className='card-text'>This is where the plot description is going to go and it will likely be kinda long but not too long cause no one has time for that shit.</p> 
                  </div>
                  <div className='row'>
                  <br />
                    <p className='card-text'>Awards and nominations can go here should I decide that I want that shit</p>
                  </div>
                  <br />
                  <div className='row'>
                    <p className='card-text mb-1'><strong>Metascore</strong>: score</p>
                  </div>
                  <div className='row'>
                    <p className='card-text'><strong>IMDB</strong>: score</p>
                  </div>  
                </div>
              </div>
            </div>



          {/* row div end below */}
          </div>





          <p>Viewing movie {this.props.match.params.id}</p>

        </div>
      {/* closing div tag below   */}  
      </div>    
    )
  }
}

export default MovieDetailContainer;