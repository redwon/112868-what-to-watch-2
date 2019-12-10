import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {MovieType} from '../../types';

import Header from '../header/header';
import Footer from '../footer/footer';
import MoviesList from '../movies-list/movies-list';

const MyList = ({movies}) => {
  if (!movies) {
    return null;
  }

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies} />
      </section>
      <Footer />
    </div>
  );
};

MyList.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
};

const mapStateToProps = (state, props) => Object.assign({}, props, {
  movies: state.favoriteMovies,
});

export {MyList};

export default connect(mapStateToProps)(MyList);
