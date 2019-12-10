import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/genre/genre';

import {MovieType, GenresType} from '../../types';

const GenresList = ({movies, genre, onGenreChange}) => {
  const genresSet = new Set([GenresType.ALL_GENRES, ...movies.map((it) => it.genre)]);
  const listItems = Array.from(genresSet).map((it, i) => (
    <li
      key={i}
      className={`catalog__genres-item ${it === genre ? `catalog__genres-item--active` : ``}`}
    >
      <a href="#" className="catalog__genres-link" onClick={(evt) => {
        evt.preventDefault();
        onGenreChange(it);
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
  genre: PropTypes.string,
  onGenreChange: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
