import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import {AddMyList} from './add-my-list';

Enzyme.configure({adapter: new Adapter()});

it(`AddMyList is correctly handled click on button`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<AddMyList
    movie={movies[0]}
    type="promo"
    onToggleFavorite={clickHandler}
  />);

  const btn = wrapper.find(`.btn--list`);

  btn.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledWith(movies[0], `promo`);
});
