import PropTypes from 'prop-types';
import imageSrc from '../assets/scss/images/zelda.jpeg';

MultipleChoiceQuestionImage.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
  image: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  correct: PropTypes.bool,
  incorrect: PropTypes.bool,
  label: PropTypes.string,
};

export function MultipleChoiceQuestionImage({
  type,
  image,
  id,
  value,
  checked,
  disabled,
  correct,
  incorrect,
  label,
}) {
  const isCorrect = correct ? 'correct' : '';
  const isIncorrect = incorrect ? 'incorrect' : '';

  return (
    <>
      <form className="mcq">
        <input
          type={type}
          id={id}
          className={` ${isCorrect} ${isIncorrect}`}
          value={value}
          defaultChecked={checked}
          disabled={disabled}
        />
        <label htmlFor={id}>{image ? <img src={imageSrc} /> : label}</label>
      </form>
    </>
  );
}
