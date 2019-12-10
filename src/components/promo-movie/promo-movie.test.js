import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {PromoMovie} from './promo-movie';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<PromoMovie
      movie={movies[0]}
      onPlayMovie={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
