import { render } from '@testing-library/react';

import { PositiveMessageModal } from './../MessageStyles';

const renderComponent = (props = {}) => {
  const utils = render(
    <PositiveMessageModal {...props}>Wrapper</PositiveMessageModal>
  );
  const wrapper = utils.queryByText('Wrapper')!;
  return { ...utils, wrapper };
};

describe('<PositiveMessageModal />', () => {
  it('should render a <div> tag', () => {
    const { wrapper } = renderComponent();
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.tagName).toBe('DIV');
  });

  it('should have a class attribute', () => {
    const { wrapper } = renderComponent();
    expect(wrapper).toHaveAttribute('class');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { wrapper } = renderComponent({ id });
    expect(wrapper).toHaveAttribute('id', id);
  });

  it('should not adopt an invalid attribute', () => {
    const { wrapper } = renderComponent({ attribute: 'test' });
    expect(wrapper).not.toHaveAttribute('attribute');
  });
});
