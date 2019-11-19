import React from 'react';
import PropTypes from 'prop-types';

import {MovieType, GenresType} from '../../types';

const GenresList = ({movies, onChange, activeIndex, onChangeActiveIndex}) => {
  const genresSet = new Set([GenresType.ALL_GENRES, ...movies.map((it) => it.genre)]);
  const listItems = Array.from(genresSet).map((it, i) => (
    <li
      key={i}
      className={`catalog__genres-item ${i === activeIndex ? `catalog__genres-item--active` : ``}`}
    >
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onChange(it);
        onChangeActiveIndex(i);
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
  movies: PropTypes.arrayOf(MovieType),
  onChange: PropTypes.func.isRequired,
  activeIndex: PropTypes.number,
  onChangeActiveIndex: PropTypes.func,
};

export default GenresList;
