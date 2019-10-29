import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card';

const mockMovie = {
  name: `name`,
  image: `image`
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={mockMovie}
      onClick={() => {}}
      onHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
