import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {movieType} from '../../types';

import MovieCard from '../movie-card/movie-card';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  onHoverCard(movie) {
    this.setState(() => {
      return {
        activeCard: movie
      };
    });
  }

  getListItems() {
    const {movies, onClickTitle} = this.props;

    return movies.map((it, i) => (
      <MovieCard
        key={i}
        movie={it}
        onClick={onClickTitle}
        onHover={(movie) => this.onHoverCard(movie)}
      />
    ));
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.getListItems()}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  onClickTitle: PropTypes.func,
  onHoverCard: PropTypes.func,
};

export default MoviesList;
