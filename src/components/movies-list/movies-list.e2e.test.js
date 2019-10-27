import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MoviesList from './movies-list';

Enzyme.configure({adapter: new Adapter()});

const mockMovieNames = [
  `Movie 1`,
  `Movie 2`
];

it(`Welcome screen is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const moviesList = shallow(<MoviesList
    movieNames={mockMovieNames}
    onClickTitle={clickHandler}
  />);

  const movieTitles = moviesList.find(`.small-movie-card__title`);

  movieTitles.forEach((node) => {
    node.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(movieTitles.length);
});
