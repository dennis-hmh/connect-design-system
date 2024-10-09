import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon, IconProps } from './Icon';
import '@testing-library/jest-dom';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';

describe('Icon Component', () => {
  const defaultProps: IconProps = {
    id: 'add' as IconId,
    size: 'md',
    fill: 'green-s50' as Color,
    stroke: 'green-s50' as Color,
    focusable: false,
    className: '',
    dataTestId: 'test-icon',
  };

  it('renders the icon with the correct id', () => {
    render(<Icon {...defaultProps} />);
    const useElement = screen.getByTestId('test-icon').querySelector('use');
    expect(useElement).toHaveAttribute('href', expect.stringContaining('#add'));
  });

  it('applies the correct size class', () => {
    render(<Icon {...defaultProps} />);
    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toHaveClass('connect__icon-md');
  });

  // toHaveStyle does not works with CSS variables
  // it('applies the correct fill color', () => {
  //   render(<Icon {...defaultProps} fill={'green-s50' as Color} />);
  //   const iconElement = screen.getByTestId('test-icon');
  //   expect(iconElement).toHaveStyle('--connect__icon-fill-color: var( --connect__green-s50)');
  // });

  // it('applies the correct stroke color', () => {
  //   render(<Icon {...defaultProps} stroke={'green-s50' as Color} />);
  //   const iconElement = screen.getByTestId('test-icon');
  //   expect(iconElement).toHaveStyle('--connect__icon-stroke-color: var(--connect__green-s50)');
  // });

  it('sets the icon as focusable when focusable prop is true', () => {
    render(<Icon {...defaultProps} focusable={true} />);
    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toHaveAttribute('focusable', 'true');
  });

  it('sets the correct opacity', () => {
    render(<Icon {...defaultProps} opacity={0.5} />);
    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toHaveStyle('opacity: 0.5');
  });
});
