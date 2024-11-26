// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect, vi } from 'vitest';
// import { Button, ButtonProps } from './Button';
// import { Color } from '../../utils/colors';
// import '@testing-library/jest-dom';

// describe('Button Component', () => {
//   const defaultProps: ButtonProps = {
//     children: 'Test Button',
//     primary: true,
//     disabled: false,
//     correct: false,
//     incorrect: false,
//     submit: 'button',
//     clickHandler: vi.fn(),
//     iconId: undefined,
//     iconSize: 'md',
//     fill: 'white' as Color,
//     iconPosition: 'before',
//     ariaLabel: 'Test Button',
//     dataTestId: 'test-button',
//     additionalClass: '',
//   };

//   it('renders the button with default props', () => {
//     render(<Button {...defaultProps} />);
//     const buttonElement = screen.getByTestId('test-button');
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement).toHaveTextContent('Test Button');
//   });

//   it('calls clickHandler when clicked', () => {
//     render(<Button {...defaultProps} />);
//     const buttonElement = screen.getByTestId('test-button');
//     fireEvent.click(buttonElement);
//     expect(defaultProps.clickHandler).toHaveBeenCalled();
//   });

//   it('applies the correct class for primary button', () => {
//     render(<Button {...defaultProps} primary={true} />);
//     const buttonElement = screen.getByTestId('test-button');
//     expect(buttonElement).toHaveClass('connect__button-primary');
//   });

//   it('applies the correct class for secondary button', () => {
//     render(<Button {...defaultProps} primary={false} />);
//     const buttonElement = screen.getByTestId('test-button');
//     expect(buttonElement).toHaveClass('connect__button-secondary');
//   });

//   it('applies the correct class for correct button', () => {
//     render(<Button {...defaultProps} correct={true} />);
//     const buttonElement = screen.getByTestId('test-button');
//     expect(buttonElement).toHaveClass('connect__button-correct');
//   });

//   it('applies the correct class for incorrect button', () => {
//     render(<Button {...defaultProps} incorrect={true} />);
//     const buttonElement = screen.getByTestId('test-button');
//     expect(buttonElement).toHaveClass('connect__button-incorrect');
//   });

//   it('renders the icon when iconId is provided', () => {
//     render(<Button {...defaultProps} iconId="arrowUp" />);
//     const iconElement = screen.getByTestId('test-button');
//     expect(iconElement).toBeInTheDocument();
//   });

//   it('disables the button when disabled prop is true', () => {
//     render(<Button {...defaultProps} disabled={true} />);
//     const buttonElement = screen.getByTestId('test-button');
//     expect(buttonElement).toBeDisabled();
//   });
// });
