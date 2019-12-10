import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import {App} from './app';

jest.mock(`../main/main`, () => () => `Main`);
jest.mock(`../header/header`, () => () => `Header`);

const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {};
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MemoryRouter>
      <App
        onLoadMovies={jest.fn()}
        onLoadPromoMovie={jest.fn()}
        onLoadFavorites={jest.fn()}
      />
    </MemoryRouter>, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
