import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import MoviePlayer from './movie-player';

Enzyme.configure({adapter: new Adapter()});

it(`MoviePlayer is correctly handled click on button`, () => {
  const handlePlayButtonClick = jest.fn();
  const handlePlayerFullScreen = jest.fn();
  const handlePlayerExit = jest.fn();
  const wrapper = shallow(<MoviePlayer
    movie={movies[0]}
    isPlaying={true}
    progress={0}
    endTime={`0:00:00`}
    onPlayButtonClick={handlePlayButtonClick}
    onEnableFullScreen={handlePlayerFullScreen}
    renderVideo={jest.fn()}
    onExit={handlePlayerExit}
  />);

  const playBtn = wrapper.find(`.player__play`);
  const onFullScreeBtn = wrapper.find(`.player__full-screen`);
  const onExitBtn = wrapper.find(`.player__exit`);

  playBtn.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);

  onFullScreeBtn.simulate(`click`);
  expect(handlePlayerFullScreen).toHaveBeenCalledTimes(1);

  onExitBtn.simulate(`click`);
  expect(handlePlayerExit).toHaveBeenCalledTimes(1);
});
