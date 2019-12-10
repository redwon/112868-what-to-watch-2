import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import AddMyList from './add-my-list';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<AddMyList
      movie={movies[0]}
      type="promo"
      onToggleFavorite={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
