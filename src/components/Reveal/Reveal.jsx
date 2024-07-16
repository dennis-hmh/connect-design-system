import PropTypes from 'prop-types';

Reveal.propTypes = {
  front: 'Select to Reveal',
  back: 'Iron Man',
  grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
};

export function Reveal({ front, back, grade }) {
  return (
    <div className={grade}>
      <ul className="source__reveal">
        <li>
          <details>
            <summary>
              <h5 className="source__flipcards__front">{front}</h5>
            </summary>
            <div className="source__flipcards__back">
              <p>{back}</p>
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h5 className="source__flipcards__front">{front}</h5>
            </summary>
            <div className="source__flipcards__back">
              <p>{back}</p>
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h5 className="source__flipcards__front">{front}</h5>
            </summary>
            <div className="source__flipcards__back">
              <p>{back}</p>
            </div>
          </details>
        </li>
      </ul>
    </div>
  );
}
