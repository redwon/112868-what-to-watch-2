import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';

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
      movies={films}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
