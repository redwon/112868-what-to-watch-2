import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import MoviesList from './movies-list';

const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {};
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      movies={movies}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
