import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {Main} from './main';

jest.mock(`../header/header`, () => () => `Header`);
jest.mock(`../promo-movie/promo-movie`, () => () => `PromoMovie`);

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
      onChangeItemsToShow={jest.fn()}
      itemsToShow={0}
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
