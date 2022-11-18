import PropTypes from 'prop-types';
import toUpperCaseFirstLeter from '../../utils/toUpperCaseFirstLeter';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.btn}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {toUpperCaseFirstLeter(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
