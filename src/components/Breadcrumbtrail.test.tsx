import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { BreadCrumbtrail } from './Breadcrumbtrail';

const testTrailItems = [
  {
    label: 'Jobs',
    to: '/jobs'
  },
  {
    label: 'Non-link item'
  }
];

it('renders correctly without any trail items', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <BreadCrumbtrail trail={[]} />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with trail items', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <BreadCrumbtrail trail={testTrailItems} />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
