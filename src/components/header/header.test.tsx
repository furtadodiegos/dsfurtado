import React from 'react';

import { render } from '../../../__tests__';
import AppHeader from './header';

describe('First desc', () => {
  it('Should test the', async () => {
    const { getByTestId } = render(<AppHeader />);

    expect(getByTestId('app.header')).toBeTruthy();
  });
});
