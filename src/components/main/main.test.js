import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main
      errorCount={0}
      gameTime={0}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
