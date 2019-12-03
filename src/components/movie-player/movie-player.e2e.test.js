import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import movies from '../../mocks/movies';

import MoviePlayer from './movie-player';

Enzyme.configure({adapter: new Adapter()});

it(`MoviePlayer is correctly handled click on button`, () => {
  const onPlayHandler = jest.fn();
  const onFullScreenHandler = jest.fn();
  const onExitHandler = jest.fn();
  const wrapper = shallow(<MoviePlayer
    movie={movies[0]}
    isPlaying={true}
    progress={0}
    endTime={`0:00:00`}
    onPlayButtonClick={onPlayHandler}
    onEnableFullScreen={onFullScreenHandler}
    renderVideo={jest.fn()}
    onExit={onExitHandler}
  />);

  const playBtn = wrapper.find(`.player__play`);
  const onFullScreeBtn = wrapper.find(`.player__full-screen`);
  const onExitBtn = wrapper.find(`.player__exit`);

  playBtn.simulate(`click`);
  expect(onPlayHandler).toHaveBeenCalledTimes(1);

  onFullScreeBtn.simulate(`click`);
  expect(onFullScreenHandler).toHaveBeenCalledTimes(1);

  onExitBtn.simulate(`click`);
  expect(onExitHandler).toHaveBeenCalledTimes(1);
});
