import React from 'react';
import { render } from '@testing-library/react';
import ResponsiveLayout from '../../src/components/ResponsiveLayout';

test('should render the given children', () => {
  const ChildComp = () => (<div>hello friend</div>);
  const { getByText } = render(
    <ResponsiveLayout>
      <ChildComp />
    </ResponsiveLayout>
  );

  getByText('hello friend');
})
