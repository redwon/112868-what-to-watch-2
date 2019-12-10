import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import movies from '../../mocks/movies';
import reviews from '../../mocks/reviews';

import {Movie} from './movie';

jest.mock(`../header/header`, () => () => `Header`);
jest.mock(`../add-my-list/add-my-list`, () => () => `AddMyList`);

it(`renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Movie
        movie={movies[0]}
        reviews={reviews}
        relatedMovies={movies.slice(0, 4)}
        onGenreChange={jest.fn()}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
