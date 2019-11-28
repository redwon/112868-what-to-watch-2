import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {Movie} from './movie';

jest.mock(`../header/header`, () => () => `Header`);

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Movie
      movie={movies[0]}
      relatedMovies={movies.slice(0, 4)}
      onGenreChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
