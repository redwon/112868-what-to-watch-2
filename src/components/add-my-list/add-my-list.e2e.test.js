import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import AddMyList from './add-my-list';

Enzyme.configure({adapter: new Adapter()});

it(`AddMyList is correctly handled click on button`, () => {
  const handlePostRequest = jest.fn();
  const wrapper = shallow(<AddMyList
    movie={movies[0]}
    isLoading={false}
    onPost={handlePostRequest}
  />);

  const btn = wrapper.find(`.btn--list`);

  btn.simulate(`click`);

  expect(handlePostRequest).toHaveBeenCalledWith(`/favorite/${movies[0].id}/${1}`, {}, expect.anything());
});
