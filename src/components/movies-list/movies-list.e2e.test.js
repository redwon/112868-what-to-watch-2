import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesList from './movies-list';

Enzyme.configure({adapter: new Adapter()});

const mockMovies = [
  {
    name: `name`,
    image: `image`
  },
  {
    name: `name`,
    image: `image`
  }
];

it(`MovieList is correctly handled click on title`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<MoviesList
    movies={mockMovies}
    onClickTitle={clickHandler}
  />);

  const movieTitles = wrapper.find(`.small-movie-card__link`);

  movieTitles.forEach((node) => {
    node.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(movieTitles.length);
});
