import { render } from '@testing-library/react';
import { ReportHeader } from '../ReportStyles';

const children = 'text';

const renderComponent = (props = {}) => {
  const utils = render(<ReportHeader {...props}>{children}</ReportHeader>);
  const heading = utils.queryByText(children);
  return { ...utils, heading };
};

describe('ReportHeader />', () => {
  it('should render a prop', () => {
    const id = 'test';
    const { heading } = renderComponent({ id });
    expect(heading).toHaveAttribute('id', id);
  });

  it('should render its text', () => {
    const { heading } = renderComponent();
    expect(heading).toHaveTextContent(children);
  });
});
