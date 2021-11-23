import {
  FETCH_MOVIE,
  SEARCH_MOVIES,
  FETCH_INITIAL_MOVIES
} from '../actions/movies';

import { SIGN_OUT } from '../actions/user';


const initailState = {
  initialMovies: [],
  search: {
    text: '',
    page: 1,
    movies: [],
    response: '',
    totalResults: ''
  },
  movie: {}
}


const movies = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_INITIAL_MOVIES:
      return {
        ...state,
        initialMovies: [...state.initialMovies, ...action.movies]
      }
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.movie
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        search: action.search
      }
    case SIGN_OUT:
      return initailState;
    default:
      return state;
  }
}

export default movies;