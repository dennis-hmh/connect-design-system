import PropTypes from 'prop-types';

DragDrop.propTypes = {
  correct: PropTypes.bool,
  incorrect: PropTypes.bool,
  disabled: PropTypes.bool,
  drop: PropTypes.bool,
  grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
};

export function DragDrop({ correct, incorrect, disabled, drop, grade }) {
  const isCorrect = correct ? 'correct' : '';
  const isIncorrect = incorrect ? 'incorrect' : '';

  return (
    <div className={grade}>
      {drop ? (
        <div className="drop">
          <button className="drag">The mouse rides a bike</button>
        </div>
      ) : (
        <button className={` drag ${isCorrect} ${isIncorrect} `} disabled={disabled}>
          The mouse rides a bike
        </button>
      )}
    </div>
  );
}
