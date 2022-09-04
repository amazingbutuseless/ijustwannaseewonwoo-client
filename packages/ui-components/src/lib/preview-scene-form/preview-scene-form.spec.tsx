import { render } from '@testing-library/react';

import PreviewSceneForm from './preview-scene-form';

const onSubmit = jest.fn();

describe('AddSceneForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PreviewSceneForm onSubmit={onSubmit} />);
    expect(baseElement).toBeTruthy();
  });
});
