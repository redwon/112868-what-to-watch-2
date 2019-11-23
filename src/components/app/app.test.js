import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {App} from './app';

jest.mock(`../header/header`, () => () => `Header`);

const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {};
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App
      movies={movies}
      filteredMovies={movies}
      onGenreChange={jest.fn()}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
