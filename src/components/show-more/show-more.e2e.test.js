import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowMore from './show-more';

Enzyme.configure({adapter: new Adapter()});

const initialCount = 8;
const itemsPerPage = 20;

it(`ShowMore is correctly handled click on button`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<ShowMore
    itemsToShow={8}
    onClick={clickHandler}
  />);

  const btn = wrapper.find(`.catalog__button`);

  btn.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledWith(initialCount + itemsPerPage);
});
