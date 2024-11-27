import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputText, InputTextProps } from './InputText';
import '@testing-library/jest-dom';

describe('InputText Component', () => {
  const defaultProps: InputTextProps = {
    correct: false,
    incorrect: false,
    answerShown: false,
    number: false,
    disabled: false,
    defaultText: '',
    dataTestId: 'test-input',
  };

  it('renders the input with default text', () => {
    render(<InputText {...defaultProps} defaultText="Test Text" />);
    const inputElement = screen.getByDisplayValue(/Test Text/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('applies the correct class for correct input', () => {
    render(<InputText {...defaultProps} correct={true} />);
    const inputElement = screen.getByLabelText(/Input field, marked as correct/i);
    expect(inputElement).toHaveClass('connect__feedback-correct');
  });

  it('applies the correct class for incorrect input', () => {
    render(<InputText {...defaultProps} incorrect={true} />);
    const inputElement = screen.getByLabelText(/Input field, marked as incorrect/i);
    expect(inputElement).toHaveClass('connect__feedback-incorrect');
  });

  it('applies the correct class for answer shown input', () => {
    render(<InputText {...defaultProps} answerShown={true} />);
    const inputElement = screen.getByLabelText(/Input field, answer shown/i);
    expect(inputElement).toHaveClass('connect__feedback-shown');
  });

  it('disables the input when disabled prop is true', () => {
    render(<InputText {...defaultProps} disabled={true} />);
    const inputElement = screen.getByLabelText(/Input field/i);
    expect(inputElement).toBeDisabled();
  });

  it('disables the input when correct, incorrect, or answerShown is true', () => {
    render(<InputText {...defaultProps} disabled={true} correct={true} />);
    const inputElement = screen.getByLabelText(/Input field, marked as correct/i);
    expect(inputElement).toBeDisabled();

    render(<InputText {...defaultProps} disabled={true} incorrect={true} />);
    const inputElement2 = screen.getByLabelText(/Input field, marked as incorrect/i);
    expect(inputElement2).toBeDisabled();

    render(<InputText {...defaultProps} disabled={true} answerShown={true} />);
    const inputElement3 = screen.getByLabelText(/Input field, answer shown/i);
    expect(inputElement3).toBeDisabled();
  });

  it('renders the input as number type when number prop is true', () => {
    render(<InputText {...defaultProps} number={true} />);
    const inputElement = screen.getByLabelText(/Input field/i);
    expect(inputElement).toHaveAttribute('type', 'number');
  });

  it('updates the input value on change', () => {
    render(<InputText {...defaultProps} />);
    const inputElement = screen.getByLabelText(/Input field/i);
    fireEvent.change(inputElement, { target: { value: 'New Text' } });
    expect(inputElement).toHaveValue('New Text');
  });
});
