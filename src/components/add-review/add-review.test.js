import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import {AddReview} from './add-review';

jest.mock(`../header/header`, () => () => `Header`);

it(`renders correctly`, () => {
  const tree = renderer
    .create(<AddReview
      movie={movies[0]}
      comment={`comment`}
      isCommentValid={true}
      rating={1}
      isRatingValid={true}
      isFormValid={true}
      isShowError={true}
      onShowError={jest.fn()}
      onUserInput={jest.fn()}
      onPost={jest.fn()}
      isLoading={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
