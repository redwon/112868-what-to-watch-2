import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import {GenresList} from './genres-list';

Enzyme.configure({adapter: new Adapter()});

it(`GenresList is correctly handled click on item`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<GenresList
    movies={movies}
    genre="All Genres"
    onGenreChange={clickHandler}
  />);

  const genres = wrapper.find(`.catalog__genres-link`);

  genres.at(1).simulate(`click`, {preventDefault: () => {}});

  expect(clickHandler).toHaveBeenCalledWith(movies[0].genre);
});
