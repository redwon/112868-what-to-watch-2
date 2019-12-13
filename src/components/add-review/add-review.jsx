import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';
import {getMovieById} from '../../selectors';
import history from '../../history';

import Header from '../header/header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

const AddReview = (props) => {
  if (!props.movie) {
    return null;
  }

  const {
    movie,
    isLoading,
    error,
    onPost,
    comment,
    isCommentValid,
    commentErrorMessage,
    rating,
    isRatingValid,
    ratingErrorMessage,
    isFormValid,
    isShowError,
    onShowError,
    onUserInput,
  } = props;

  const ratings = [1, 2, 3, 4, 5];

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onShowError(true);

    if (isFormValid && !isLoading) {
      onShowError(false);
      onPost(`/comments/${movie.id}`, {rating, comment}, () => {
        history.push(`/movie/${movie.id}`);
      });
    }
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>

        <Header>
          <Breadcrumbs
            currentPage="Add review"
            parentPage={movie.name}
            parentPageLink={`/movie/${movie.id}`}
          />
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={movie.posterImage}
            alt={movie.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form className="add-review__form" onSubmit={handleFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {ratings.map((it, i) => (
                <Fragment key={i}>
                  <input
                    className="rating__input"
                    id={`star-${it}`}
                    type="radio"
                    name="rating"
                    value={it}
                    checked={it === rating}
                    onChange={onUserInput}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${it}`}
                    style={{opacity: (it <= rating) ? 1 : 0.5}}
                  >
                    Rating {it}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="comment"
              placeholder="Review text"
              value={comment}
              onChange={onUserInput}
            ></textarea>

            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
              >
                Post
              </button>
            </div>
          </div>

          {isShowError && (
            <Fragment>
              {!isRatingValid && (
                <p><strong>{ratingErrorMessage}</strong></p>
              )}
              {!isCommentValid && (
                <p><strong>{commentErrorMessage}</strong></p>
              )}
              {error && (
                <p><strong>{error.message}</strong></p>
              )}
            </Fragment>
          )}
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  movie: MovieType,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  onPost: PropTypes.func,
  comment: PropTypes.string,
  isCommentValid: PropTypes.bool,
  commentErrorMessage: PropTypes.string,
  rating: PropTypes.number,
  isRatingValid: PropTypes.bool,
  ratingErrorMessage: PropTypes.string,
  isFormValid: PropTypes.bool,
  isShowError: PropTypes.bool,
  onShowError: PropTypes.func,
  onUserInput: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = (state, props) => Object.assign({}, props, {
  movie: getMovieById(state, props.match.params.id),
});

export {AddReview};

export default connect(mapStateToProps)(AddReview);
