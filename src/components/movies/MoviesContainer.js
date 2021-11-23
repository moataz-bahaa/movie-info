import React from 'react';
import MovieCard from './MovieCard';
import Spinner from '../layout/Spinner';

const MoviesContainer = ({ movies, loading }) => {
  if (loading) {
    return <Spinner />
  }
  return (
    <div className="row">
      {
        movies.length > 0
          ?
          movies.map((movie, idx) => <MovieCard key={movie.imdbID + idx} movie={movie} />)
          :
          <h1 className="text-muted">not items to display</h1>
      }
    </div>
  );
};

export default React.memo(MoviesContainer);