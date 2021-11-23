import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchInitialMovies } from '../../redux/actions/movies';
import NotFound from '../layout/NotFound';
import MovieCard from './MovieCard';
import Spinner from '../layout/Spinner';

const Home = () => {

  const dispatch = useDispatch();
  const { loading, initialMovies } = useSelector(state => {
    return {
      loading: state.shared.loading,
      initialMovies: state.movies.initialMovies
    }
  });

  const [counter, setCounter] = useState(1);

  const getData = (name, counter) => dispatch(handleFetchInitialMovies(name, counter));

  const handleClick = () => {
    setCounter(cnt => cnt + 1);
    getData('fantasy', counter);
  }

  useEffect(() => {
    if (initialMovies.length === 0) {
      getData('fantasy', counter);
    }
  }, [counter, getData, initialMovies]);

  if (!initialMovies) {
    return <NotFound />
  }
  return (
    <div>
      <h1 className="my-5 py-3 text-muted text-center border border-3 shadow">Top Watched</h1>
      <div className="row">
        {
          initialMovies.map((movie, idx) => (
            <MovieCard key={movie.imdbID + idx} movie={movie} />
          ))
        }
      </div>
      {
        loading && <Spinner />
      }
      <button
        id="mybtn"
        className="btn btn-outline-success w-100"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Show More'}
      </button>
    </div>
  );
};

export default Home;