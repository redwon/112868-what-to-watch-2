import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in';

jest.mock(`../header/header`, () => () => `Header`);

it(`renders correctly`, () => {
  const tree = renderer
    .create(<SignIn
      onLogin={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
