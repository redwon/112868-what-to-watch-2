import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShowMore from './show-more';

Enzyme.configure({adapter: new Adapter()});

const initialCount = 8;
const itemsPerPage = 20;

it(`ShowMore is correctly handled click on button`, () => {
  const handleButtonClick = jest.fn();
  const wrapper = shallow(<ShowMore
    itemsToShow={8}
    onClick={handleButtonClick}
  />);

  const btn = wrapper.find(`.catalog__button`);

  btn.simulate(`click`);

  expect(handleButtonClick).toHaveBeenCalledWith(initialCount + itemsPerPage);
});
