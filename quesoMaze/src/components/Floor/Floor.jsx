import PropTypes from "prop-types";
import styles from "./Floor.module.css";

const Floor = ({ type }) => (
  <div className={`${styles.floor} ${styles[`floor--${type}`]}`} />
);

Floor.propTypes = {
  type: PropTypes.oneOf([
    "garden",
    "race",
    "goal",
  ]).isRequired,
};

export default Floor;
