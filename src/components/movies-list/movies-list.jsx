import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = (props) => {
  const {movieNames} = props;
  const listItems = movieNames.map((name, index) => (
    <article key={index} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
          alt="Fantastic Beasts: The Crimes of Grindelwald"
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {name}
        </a>
      </h3>
    </article>
  ));

  return (
    <div className="catalog__movies-list">
      {listItems}
    </div>
  );
};

MoviesList.propTypes = {
  movieNames: PropTypes.arrayOf(PropTypes.string)
};

export default MoviesList;
