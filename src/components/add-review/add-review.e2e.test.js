import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import {AddReview} from './add-review';

Enzyme.configure({adapter: new Adapter()});

it(`AddReview is correctly handled submit form`, () => {
  const handleErrorShow = jest.fn();
  const handleUserInput = jest.fn();
  const handlePostRequest = jest.fn();

  const wrapper = shallow(<AddReview
    movie={movies[0]}
    comment={`comment`}
    isCommentValid={true}
    rating={1}
    isRatingValid={true}
    isFormValid={true}
    isShowError={true}
    onShowError={handleErrorShow}
    onUserInput={handleUserInput}
    onPost={handlePostRequest}
    isLoading={false}
  />);

  const form = wrapper.find(`.add-review__form`);
  form.simulate(`submit`, {preventDefault: jest.fn()});
  expect(handleErrorShow).toHaveBeenCalledWith(true);
  expect(handlePostRequest).toHaveBeenCalledWith(
      `/comments/${movies[0].id}`,
      {comment: `comment`, rating: 1},
      expect.anything()
  );

  const ratingInputs = wrapper.find(`.rating__input`);
  ratingInputs.at(2).simulate(`change`);
  expect(handleUserInput).toHaveBeenCalledTimes(1);
});
