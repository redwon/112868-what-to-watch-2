import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';

import App from './app';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App
      currentYear={0}
      movies={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
