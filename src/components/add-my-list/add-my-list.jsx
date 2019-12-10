import React from 'react';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

const AddMyList = ({movie, onClick, isLoading, onPost}) => {
  const onClickHandler = () => {
    if (!isLoading) {
      const state = movie.isFavorite ? 0 : 1;

      onPost(`/favorite/${movie.id}/${state}`, {}, (data) => {
        if (typeof onClick === `function`) {
          onClick(data);
        }
      });
    }
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
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  onPost: PropTypes.func,
};

export default AddMyList;
