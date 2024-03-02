import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Home from './Home';

it('renders correctly without any trail items', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
