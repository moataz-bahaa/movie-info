import React from 'react';
import MoviesContainer from './MoviesContainer';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../layout/NotFound';
import { handleFetchSearchMovies } from '../../redux/actions/movies';
import { Pagination } from 'react-bootstrap';

const Search = () => {
  const dispatch = useDispatch();
  const { text, page, movies, response, totalResults, loading } = useSelector(state => {
    return {
      ...state.movies.search,
      loading: state.shared.loading
    }
  });

  const getData = (text, page) => dispatch(handleFetchSearchMovies(text, page));

  const handleClick = (val) => {
    getData(text, val);
    window.scrollTo(0, 0);
  };

  if (!movies || response === 'False') {
    return <NotFound />;
  }

  let t = page;
  const paginationArray = Array.from(Array(6), () => t++);

  return (
    <div>
      <h1 className='my-5 py-3 text-muted text-center border border-3 shadow'>
        {text === ''
          ? 'Write Movie Title In Search Bar'
          : loading
          ? 'Loading.....'
          : `${totalResults} Search Results Of ${text} page: ${page}`}
      </h1>
      <MoviesContainer movies={movies} loading={loading} />
      {movies.length > 0 && (
        <div>
          <Pagination className='justify-content-center'>
            <Pagination.Item
              onClick={() => handleClick(page - 1)}
              disabled={page <= 1}
            >
              Prevous
            </Pagination.Item>
            {paginationArray.map(
              (el) =>
                el <= Math.floor(totalResults / 10) && (
                  <Pagination.Item
                    key={Math.floor(Math.random() * 10000)}
                    active={el === page}
                    disabled={el > Math.floor(totalResults / 10)}
                    onClick={() => handleClick(el)}
                  >
                    {el}
                  </Pagination.Item>
                )
            )}
            <Pagination.Item
              onClick={() => handleClick(page + 1)}
              disabled={page >= 5}
            >
              Next
            </Pagination.Item>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Search;
