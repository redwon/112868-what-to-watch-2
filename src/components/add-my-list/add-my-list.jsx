import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {MovieType} from '../../types';
import {Operations} from '../../reducer/favorites/favorites';

const AddMyList = ({movie, type, onToggleFavorite}) => {
  const onClickHandler = () => {
    onToggleFavorite(movie, type);
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={onClickHandler}
    >
      {!movie.isFavorite && <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>}
      {movie.isFavorite && <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>}
      <span>My list</span>
    </button>
  );
};

AddMyList.propTypes = {
  movie: MovieType,
  type: PropTypes.string,
  onToggleFavorite: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onToggleFavorite: (movie, type) => {
    dispatch(Operations.toggleFavorite(movie, type));
  }
});

export {AddMyList};

export default connect(null, mapDispatchToProps)(AddMyList);
