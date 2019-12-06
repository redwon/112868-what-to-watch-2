import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Breadcrumbs from './breadcrumbs';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <Breadcrumbs
        currentPage="currentPage"
        parentPage="parentPage"
        parentPageLink="parentPageLink"
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
