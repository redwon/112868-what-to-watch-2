import React from 'react';
import PropTypes from 'prop-types';

import {movieType} from '../../types';

const GenresList = ({genre, movies, onChange}) => {
  const genresSet = new Set([`All Genres`, ...movies.map((it) => it.genre)]);
  const listItems = Array.from(genresSet).map((it, i) => (
    <li
      key={i}
      className={`catalog__genres-item ${it === genre ? `catalog__genres-item--active` : ``}`}
    >
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onChange(it);
      }}>
        {it}
      </a>
    </li>
  ));

  return (
    <ul className="catalog__genres-list">{listItems}</ul>
  );
};

GenresList.propTypes = {
  genre: PropTypes.string,
  movies: PropTypes.arrayOf(movieType),
  onChange: PropTypes.func.isRequired
};

export default GenresList;
