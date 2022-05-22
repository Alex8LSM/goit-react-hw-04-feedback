import PropTypes from 'prop-types';
import Notification from './Notification';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total > 0 ? (
        <div>
          <div>
            <span>Good: </span> <span>{good}</span>
          </div>
          <div>
            <span>Neutral: </span> <span>{neutral}</span>
          </div>
          <div>
            <span>Bad: </span> <span>{bad}</span>
          </div>
          <div>
            <span>Total: </span>
            <span>{total}</span>
          </div>
          <div>
            <span>Positive feedback: </span>
            <span>{positivePercentage}%</span>
          </div>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
