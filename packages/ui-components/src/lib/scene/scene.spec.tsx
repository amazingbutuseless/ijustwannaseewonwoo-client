import { render } from '@testing-library/react';

import Scene from './scene';

describe('Scene', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Scene />);
    expect(baseElement).toBeTruthy();
  });
});
