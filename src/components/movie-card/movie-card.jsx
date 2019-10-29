import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({movie, onClick, onHover}) => {
  const {name, image} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onHover(movie)}
    >
      <div className="small-movie-card__image">
        <img
          src={image}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            onClick(movie);
          }}
        >
          {name}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  }),
  onClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default MovieCard;
