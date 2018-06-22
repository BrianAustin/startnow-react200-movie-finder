import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import MovieSearchContainer from './containers/searchIndex';
import MovieDetailContainer from './containers/detailIndex';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>  
      </Router>  
    );
  }
}
