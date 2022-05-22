import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className="myTitle">{title}</h2>}
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
