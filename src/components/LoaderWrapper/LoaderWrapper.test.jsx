import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoaderWrapper from './index';
import { useWeb3React } from '@web3-react/core';

jest.mock('@web3-react/core', () => ({
  ...jest.requireActual('@web3-react/core'),
  useWeb3React: jest.fn(),
}));

describe('LoaderWrapper component', () => {
  test('renders children when not activating', () => {
    useWeb3React.mockReturnValue({ isActivating: false });

    render(<LoaderWrapper>Test Content</LoaderWrapper>);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.queryByTestId('loaderBackground')).toBeNull();
  });

  test('renders loader when activating', () => {
    useWeb3React.mockReturnValue({ isActivating: true });

    render(<LoaderWrapper>Test Content</LoaderWrapper>);

    expect(screen.getByLabelText('loading')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
