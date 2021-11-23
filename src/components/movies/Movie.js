import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchMovie } from '../../redux/actions/movies';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import NotFound from '../layout/NotFound';
import MoviesCardSlider from './MoviesCardSlider';

const Movie = (props) => {
  const dispatch = useDispatch();
  const { movie, loading, id, searchMovies } = useSelector(state => {
    return {
      movie: state.movies.movie,
      loading: state.shared.loading,
      id: props.match.params.id,
      searchMovies: state.movies.search.movies
    }
  });
  const [showAlert1, setShowAlert1] = useState(true);
  const [trailerLink, setTrailerLink] = useState('');

  useEffect(() => {
    dispatch(handleFetchMovie(id));
  }, [id, dispatch]);

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/Trailer/k_497203li/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setTrailerLink(res.linkEmbed);
      })
      .catch(err => {
        console.error(err.message);
      })
  }, [setTrailerLink, id]);

  if (loading) {
    return <Spinner />;
  }
  if (movie.Response === 'False') {
    return <NotFound />;
  }

  const moviesSliderArray = searchMovies.filter((el) => el.imdbID !== movie.imdbID);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card card-body animate-movie'>
            <img src={movie.Poster} className='thumbnail' alt='Poster' />
          </div>
        </div>
        <div className='col-md-8 animate-movie'>
          <div>
            <h2 className='mb-4'>{movie.Title}</h2>
            <ul className='list-group'>
              <li className='list-group-item'>
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className='list-group-item'>
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className='list-group-item'>
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className='list-group-item'>
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className='list-group-item'>
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className='list-group-item'>
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className='list-group-item'>
                <strong>Actors:</strong> {movie.Actors}
              </li>
              <li className='list-group-item'>
                <strong>Awards:</strong> {movie.Awards}
              </li>
              <li className='list-group-item'>
                <strong>Language:</strong> {movie.Language}
              </li>
              <li className='list-group-item'>
                <strong>Country:</strong> {movie.Country}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Card className='my-5'>
        <Card.Body>
          <strong>Plot:</strong> {movie.Plot}
        </Card.Body>
      </Card>
      <div className='vidoe-container'>
        <h2 className='my-5 py-3 text-muted text-center border border-3 shadow'>
          Trailer
        </h2>
        {showAlert1 && (
          <Alert
            variant='danger'
            onClose={() => setShowAlert1(false)}
            dismissible
          >
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              I'm using omdb api to get movie info but unfortanatly the trailer
              url is not available so i'm displaying static trailer (harry
              potter) for allow movies
            </p>
            <hr />
          </Alert>
        )}
        <iframe
          className='w-100'
          height='480'
          src={trailerLink || 'https://www.youtube.com/embed/VyHV0BRtdxo'}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='card card-body bg-dark my-5 text-light'>
        <div className='col-md-12'>
          <h3>About </h3>
          {movie.Plot}
          <hr />
          <a
            href={'https://www.imdb.com/title/' + movie.imdbID}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary'
          >
            View on IMDB
          </a>
          <Link to='/' className='btn btn-default text-light'>
            Go Back To Home
          </Link>
        </div>
      </div>
      {moviesSliderArray.length >= 6 && (
        <MoviesCardSlider movies={moviesSliderArray} />
      )}
    </div>
  );
};

export default Movie;
