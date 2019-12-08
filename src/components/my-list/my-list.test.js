import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {MyList} from './my-list';

jest.mock(`../header/header`, () => () => `Header`);

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MyList
      movies={movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
