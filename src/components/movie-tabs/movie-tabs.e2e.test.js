import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import MovieTabs from './movie-tabs';

Enzyme.configure({adapter: new Adapter()});

it(`MovieTabs is correctly handled click on title`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<MovieTabs
    movie={movies[0]}
    activeIndex={0}
    onChangeActiveIndex={clickHandler}
  />);

  const links = wrapper.find(`.movie-nav__link`);

  links.at(2).simulate(`click`, {preventDefault: jest.fn()});

  expect(clickHandler).toHaveBeenCalledWith(2);
});
