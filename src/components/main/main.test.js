import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';

import Main from './main';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main
      copyrightYear={0}
      movies={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
