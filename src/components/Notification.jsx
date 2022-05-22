import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <span className="Notification">{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
