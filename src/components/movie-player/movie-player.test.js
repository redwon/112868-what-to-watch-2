import React from 'react';
import renderer from 'react-test-renderer';

import movies from '../../mocks/movies';

import MoviePlayer from './movie-player';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MoviePlayer
      movie={movies[0]}
      isPlaying={true}
      progress={0}
      endTime={`0:00:00`}
      onPlayButtonClick={jest.fn()}
      onEnableFullScreen={jest.fn()}
      renderVideo={jest.fn()}
      onExit={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
