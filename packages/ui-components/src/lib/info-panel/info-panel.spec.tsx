import { render, screen } from '@testing-library/react';

import InfoPanel, { InfoPanelProps } from './info-panel';

function renderComponent(args: InfoPanelProps = {}) {
  return render(<InfoPanel {...args} />);
}

describe('InfoPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  describe('Icon Rendering', () => {
    it('should render icon if withIcon props has not been set', () => {
      renderComponent();
      const icon = screen.queryByRole('img');
      expect(icon).toBeTruthy();
    });
  });
});
