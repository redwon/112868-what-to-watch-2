import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import {AddReview} from './add-review';

Enzyme.configure({adapter: new Adapter()});

it(`AddReview is correctly handled submit form`, () => {
  const showErrorHandler = jest.fn();
  const userInputHandler = jest.fn();
  const addReviewHandler = jest.fn();

  const wrapper = shallow(<AddReview
    movie={movies[0]}
    comment={`comment`}
    isCommentValid={true}
    rating={1}
    isRatingValid={true}
    isFormValid={true}
    isShowError={true}
    onShowError={showErrorHandler}
    onUserInput={userInputHandler}
    onAddReview={addReviewHandler}
    isAuthorizationRequired={false}
  />);

  const form = wrapper.find(`.add-review__form`);
  form.simulate(`submit`, {preventDefault: jest.fn()});
  expect(showErrorHandler).toHaveBeenCalledWith(true);
  expect(addReviewHandler).toHaveBeenCalledWith(1, `comment`, movies[0].id);

  const ratingInputs = wrapper.find(`.rating__input`);
  ratingInputs.at(2).simulate(`change`);
  expect(userInputHandler).toHaveBeenCalledTimes(1);
});
