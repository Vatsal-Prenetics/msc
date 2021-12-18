import { render } from '@testing-library/react';
import {
  NegativeMessageStyles,
  PositiveMessageStyles,
} from './../MessageStyles';

const children = 'text';

const renderComponent = (props = {}) => {
  const utils = render(
    <NegativeMessageStyles {...props}>{children}</NegativeMessageStyles>
  );
  const pN = utils.queryByText(children);
  return { ...utils, pN };
};

const renderComponentTwo = (props = {}) => {
  const utils = render(
    <PositiveMessageStyles {...props}>{children}</PositiveMessageStyles>
  );
  const p = utils.queryByText(children);
  return { ...utils, p };
};

describe('<PositiveMessageStyles {...props}> />', () => {
  it('should render a prop', () => {
    const id = 'test';
    const { p } = renderComponentTwo({ id });
    expect(p).toHaveAttribute('id', id);
  });

  it('should render its text', () => {
    const { p } = renderComponentTwo();
    expect(p).toHaveTextContent(children);
  });
});

describe('<NegativeMessageStyles {...props}> />', () => {
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
