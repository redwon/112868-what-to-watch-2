import React from 'react';
import renderer from 'react-test-renderer';

import PreviewPlayer from './preview-player';

const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {};
  }
  return null;
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<PreviewPlayer
      src="src"
      poster="poster"
    />, {createNodeMock})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
