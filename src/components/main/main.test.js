import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import Main from './main';

const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {};
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main
      movies={movies}
      filteredMovies={movies}
      onGenreChange={jest.fn()}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
