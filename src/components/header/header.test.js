import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from './header';

const mockUser = {
  id: 1,
  email: `email`,
  name: `name`,
  avatarUrl: `avatarUrl`,
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Header
      user={mockUser}
      onSignIn={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
