import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Header} from './header';

const mockUser = {
  id: 1,
  email: `email`,
  name: `name`,
  avatarUrl: `/avatarUrl`,
};

it(`renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Header
        user={mockUser}
        onSignIn={jest.fn()}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
