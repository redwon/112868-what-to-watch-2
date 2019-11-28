import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import MovieTabs from './movie-tabs';

describe(`renders correctly`, () => {
  it(`tab 1`, () => {
    const tree = renderer
      .create(<MovieTabs
        movie={movies[0]}
        activeIndex={0}
        onChangeActiveIndex={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`tab 2`, () => {
    const tree = renderer
      .create(<MovieTabs
        movie={movies[0]}
        activeIndex={1}
        onChangeActiveIndex={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`tab 3`, () => {
    const tree = renderer
      .create(<MovieTabs
        movie={movies[0]}
        activeIndex={2}
        onChangeActiveIndex={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
