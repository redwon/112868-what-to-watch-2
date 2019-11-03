import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src="src"
      poster="poster"
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
