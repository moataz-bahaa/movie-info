import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-5 animate-movie">
      <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 h-75 mb-2" src={movie.Poster} alt="Movie Cover" />
        <h5 className="text-light card-title">
          {movie.Title} - {movie.Year}
        </h5>
        <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
          Movie Details
          <IoMdArrowDropright className="fs-2" />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);