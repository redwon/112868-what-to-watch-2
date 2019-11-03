import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {};
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src="src"
      poster="poster"
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
