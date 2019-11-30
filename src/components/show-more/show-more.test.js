import React from 'react';
import renderer from 'react-test-renderer';

import ShowMore from './show-more';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ShowMore
      itemsToShow={8}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
