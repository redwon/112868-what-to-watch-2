import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import MovieCard from './movie-card';

Enzyme.configure({adapter: new Adapter()});

it(`MovieList is correctly handled click on title`, () => {
  const hoverHandler = jest.fn();
  const wrapper = shallow(<MovieCard
    movie={movies[0]}
    onClick={() => {}}
    onHover={hoverHandler}
  />);

  const movieCard = wrapper.find(`.small-movie-card`);

  movieCard.simulate(`mouseenter`);

  expect(hoverHandler).toHaveBeenCalledWith(movies[0]);
});
