import axios from 'axios'

export function updateSearchText(searchText) {
  return {
    type: 'UPDATE_SEARCH_TEXT',
    payload: { searchText }
  };
}

export function searchClick(searchText) {
  const apiKey = '8730e0e';
  return {
    type: 'SEARCH_CLICK',
    payload: axios.get('http://www.omdbapi.com/?s=' + searchText + '&apikey=' + apiKey)
    .then(response => response.data)
    .catch(err => console.log(err))
  };
}

export function moreInfoClick(imdbId) {
  const apiKey = '8730e0e';
  return {
    type: 'MORE_INFO_CLICK',
    payload: axios.get('http://www.omdbapi.com/?i=' + imdbId + '&apikey=' + apiKey)
    .then(response => response.data)
    .catch(err => console.log(err))
  };
}