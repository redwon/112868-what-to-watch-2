import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';

import MovieCard from './movie-card';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={films[0]}
      onClick={() => {}}
      onHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
