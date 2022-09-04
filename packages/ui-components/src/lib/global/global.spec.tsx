import { render } from '@testing-library/react';

import Global from './global';

describe('Global', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Global />);
    expect(baseElement).toBeTruthy();
  });
});
