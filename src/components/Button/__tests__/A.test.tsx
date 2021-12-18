import { render } from '@testing-library/react';
import A from '../A';

const renderComponent = (props = {}) => {
  const utils = render(<A {...props}> Link </A>);

  const link = utils.queryByText('Link');
  return { ...utils, link };
};

describe('<A/>', () => {
  it('should render an <a> tag', () => {
    const { link } = renderComponent();
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe(`A`);
  });
});

it('should have the class attribute', () => {
  const { link } = renderComponent();
  expect(link).toHaveAttribute('class');
});

it('Should adopt a valid class attribute', () => {
  const id = 'test-id';
  const { link } = renderComponent({ id });
  expect(link).toHaveAttribute('id', id);
});

it('Should not adpot an invalid class attribute', () => {
  const { link } = renderComponent({ attribute: 'test' });
  expect(link).not.toHaveAttribute('attribute');
});
