import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='next-arrow d-flex justify-content-center align-items-center' onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='prev-arrow d-flex justify-content-center align-items-center' onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}

const MoviesCardSlider = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className='text-danger text-center fw-bold mb-5'>Suggested For You</h2>
      <Slider {...settings}>
        {movies.map((movie, idx) => (
          <div className='px-4 slider-movie bg-white' key={movie.imdbID + idx}>
            <div className='card card-body bg-dark text-center h-100'>
              <img
                className='w-100 h-75 mb-2'
                src={movie.Poster}
                alt='Movie Cover'
              />
              <h5 className='text-light card-title'>
                {movie.Title} - {movie.Year}
              </h5>
              <Link className='btn btn-primary' to={'/movie/' + movie.imdbID}>
                Movie Details
                <IoMdArrowDropright className='fs-2' />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCardSlider;
