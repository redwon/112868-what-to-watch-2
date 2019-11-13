import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import MovieCard from './movie-card';

const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {};
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={movies[0]}
      onClick={() => {}}
      onHover={() => {}}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
