import PropTypes from 'prop-types';

Flipcards.propTypes = {
  front: PropTypes.string,
  back: PropTypes.string,
  number: PropTypes.oneOf(['3', '4']),
  counter: PropTypes.bool,
  sequenced: PropTypes.bool,
  grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
};

export function Flipcards({ front, back, number, counter, sequenced, grade }) {
  const isFour = number === '4' ? 'source__flipcards--four' : '';
  const isCounter = counter ? 'source__flipcards--counter' : '';
  const isSequenced = sequenced ? 'source__flipcards--sequenced' : '';

  return (
    <div className={grade}>
      <ul className={`source__flipcards ${isFour} ${isCounter} ${isSequenced} `}>
        <li>
          <details open="">
            <summary>
              <h5 className="source__flipcards__front">{front}</h5>
            </summary>
            <div className="source__flipcards__back">
              <p>{back}</p>
            </div>
          </details>
        </li>
        <li>
          <details open="">
            <summary>
              <h5 className="source__flipcards__front">{front}</h5>
            </summary>
            <div className="source__flipcards__back">
              <p>{back}</p>
            </div>
          </details>
        </li>
        <li>
          <details open="">
            <summary>
              <h5 className="source__flipcards__front">{front}</h5>
            </summary>
            <div className="source__flipcards__back">
              <p>{back}</p>
            </div>
          </details>
        </li>
        {number === '4' ? (
          <li>
            <details open="">
              <summary>
                <h5 className="source__flipcards__front">{front}</h5>
              </summary>
              <div className="source__flipcards__back">
                <p>{back}</p>
              </div>
            </details>
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
}
