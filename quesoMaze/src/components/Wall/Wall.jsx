import styles from './Wall.module.css';
import PropTypes from 'prop-types';

const CustomWall = ({ type }) => {
  return (
    <div className={`${styles.wall} ${styles[`wall--${type}`]}`} />
  );
};

CustomWall.propTypes = {
  type: PropTypes.oneOf(['race', 'garden'])
};

export default CustomWall;
