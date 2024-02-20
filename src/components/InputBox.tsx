// import PropTypes from 'prop-types';

// InputBox.propTypes = {
//   type: PropTypes.oneOf(['checkbox', 'radio']),
//   id: PropTypes.string,
//   name: PropTypes.string,
//   value: PropTypes.string,
//   checked: PropTypes.bool,
//   disabled: PropTypes.bool,
//   correct: PropTypes.bool,
//   incorrect: PropTypes.bool,
//   label: PropTypes.string,
// }

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  value: string;
  checked: boolean;
  disabled: boolean;
  correct: boolean;
  incorrect: boolean;
  children: React.ReactElement;
};

export function InputBox({
  type,
  id,
  value,
  name,
  checked,
  disabled,
  correct,
  incorrect,
  children,
}: InputBoxProps) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';

  return (
    <>
      <input
        type={type}
        id={id}
        className={`connect__input ${isCorrect} ${isIncorrect}`}
        value={value}
        name={name}
        defaultChecked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
}
