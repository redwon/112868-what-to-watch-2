import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';

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
      copyrightYear={0}
      movies={films}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
