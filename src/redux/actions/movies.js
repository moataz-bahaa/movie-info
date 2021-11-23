import { loading } from "./shared";

export const FETCH_INITIAL_MOVIES = 'FETCH_INITIAL_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';

export const fetchInitailMovies = (movies) => {
  return {
    type: FETCH_INITIAL_MOVIES,
    movies
  }
}

export const fetchMovie = (movie) => {
  return {
    type: FETCH_MOVIE,
    movie
  }
}

export const fetchSearchMovies = (text, page, data) => {
  return {
    type: SEARCH_MOVIES,
    search: {
      text,
      page,
      movies: data.Search,
      response: data.Response,
      totalResults: data.totalResults
    }
  }
}

export const handleFetchInitialMovies = (text, page = 1) => (dispatch) => {
  dispatch(loading(true));
  return fetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${text}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchInitailMovies(data.Search));
      dispatch(loading(false));
    })
    .catch(err => {
      console.error('Error in server');
    })
}


export const handleFetchSearchMovies = (text, page = 1) => (dispatch) => {
  dispatch(loading(true));
  return fetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${text}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchSearchMovies(text, page, data));
      dispatch(loading(false));
    })
    .catch(err => {
      console.error('Error in server');
      dispatch(loading(false));
    })
}


export const handleFetchMovie = (id) => (dispatch) => {
  dispatch(loading(true));
  return fetch(`${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchMovie(data));
      dispatch(loading(false));
    })
    .catch(err => {
      console.error('Error in server');
    })
}