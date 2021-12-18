import { render } from '@testing-library/react';
import { FooterText } from '../footer';

const children = 'text';

const renderComponent = (props = {}) => {
  const utils = render(<FooterText {...props}>{children}</FooterText>);
  const pN = utils.queryByText(children);
  return { ...utils, pN };
};

describe('<FooterText {...props}> />', () => {
  it('should render a prop', () => {
    const id = 'test';
    const { pN } = renderComponent({ id });
    expect(pN).toHaveAttribute('id', id);
  });

  it('should render its text', () => {
    const { pN } = renderComponent();
    expect(pN).toHaveTextContent(children);
  });
});
