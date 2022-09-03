import { render, screen, fireEvent } from '@testing-library/react';

import TimeInput, { TimeInputProps } from './time-input';

const onChange = jest.fn();

function renderComponent(args: Omit<TimeInputProps, 'id'>) {
  return render(<TimeInput {...args} id="test" />);
}

describe('TimeInput', () => {
  it('should render successfully', () => {
    const { baseElement } = renderComponent({
      timeInSeconds: 60,
      onChange,
    });
    expect(baseElement).toBeTruthy();
  });

  describe('render label', () => {
    it('should show label if props provided', () => {
      const testLabel = 'Test label';
      renderComponent({
        label: testLabel,
        timeInSeconds: 60,
        onChange,
      });
      const label = screen.queryByText(testLabel);
      expect(label).toBeTruthy();
    });

    it('should not show label if props not provided', () => {
      renderComponent({
        timeInSeconds: 60,
        onChange,
      });
      const label = screen.queryByRole('label');
      expect(label).not.toBeTruthy();
    });
  });

  describe('calculate initial time', () => {
    it('should works if timeInSeconds was 0', () => {
      const timeInSeconds = 0;
      const expectedMinutes = '00';
      const expectedSeconds = '00';

      const { baseElement } = renderComponent({ timeInSeconds, onChange });
      const minutesInput = baseElement.querySelector(
        '[name="test:minutes"]'
      ) as HTMLInputElement;
      expect(minutesInput?.value).toEqual(expectedMinutes);
      const secondsInput = baseElement.querySelector(
        '[name="test:seconds"]'
      ) as HTMLInputElement;
      expect(secondsInput?.value).toEqual(expectedSeconds);
    });

    it('should properly calculate minutes and seconds by timeInSeconds', () => {
      const timeInSeconds = 467;
      const expectedMinutes = '07';
      const expectedSeconds = '47';

      const { baseElement } = renderComponent({ timeInSeconds, onChange });
      const minutesInput = baseElement.querySelector(
        '[name="test:minutes"]'
      ) as HTMLInputElement;
      expect(minutesInput?.value).toEqual(expectedMinutes);
      const secondsInput = baseElement.querySelector(
        '[name="test:seconds"]'
      ) as HTMLInputElement;
      expect(secondsInput?.value).toEqual(expectedSeconds);
    });
  });

  describe('invoke with proper seconds of time', () => {
    it('should invoke onChange with proper calculated value if minutes changed', () => {
      const timeInSeconds = 0;

      const { baseElement } = renderComponent({ timeInSeconds, onChange });
      const minutesInput = baseElement.querySelector(
        '[name="test:minutes"]'
      ) as HTMLInputElement;
      fireEvent.change(minutesInput, { target: { value: '4' } });
      expect(onChange).toBeCalledWith(240);
    });

    it('should invoke onChange with proper calculated value if seconds changed', () => {
      const timeInSeconds = 245;

      const { baseElement } = renderComponent({ timeInSeconds, onChange });

      const secondsInput = baseElement.querySelector(
        '[name="test:seconds"]'
      ) as HTMLInputElement;
      fireEvent.change(secondsInput, { target: { value: '15' } });
      expect(onChange).toBeCalledWith(255);
    });
  });
});
