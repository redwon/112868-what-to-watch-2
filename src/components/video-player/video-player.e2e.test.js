import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player';

Enzyme.configure({adapter: new Adapter()});

// mock video tag methods
jest.spyOn(window.HTMLMediaElement.prototype, `play`)
  .mockImplementation(() => {});

jest.spyOn(window.HTMLMediaElement.prototype, `pause`)
  .mockImplementation(() => {});

it(`VideoPlayer should have state isPlaying true`, () => {
  const wrapper = mount(<VideoPlayer
    src="src"
    poster="poster"
    isPlaying={true}
  />);

  expect(wrapper.state().isPlaying).toBe(true);
});

it(`VideoPlayer should have state isPlaying false`, () => {
  const wrapper = mount(<VideoPlayer
    src="src"
    poster="poster"
    isPlaying={false}
  />);

  expect(wrapper.state().isPlaying).toBe(false);
});
