import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';
import reviews from '../../mocks/reviews';

import MovieTabs from './movie-tabs';

describe(`renders correctly`, () => {
  it(`tab 1`, () => {
    const tree = renderer
      .create(<MovieTabs
        movie={movies[0]}
        reviews={reviews}
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
        reviews={reviews}
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
        reviews={reviews}
        activeIndex={2}
        onChangeActiveIndex={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
