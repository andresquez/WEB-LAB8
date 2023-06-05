import PropTypes from "prop-types";
import styles from "./Player.module.css";

const CustomPlayer = ({ skin, direction }) => {
  return <div className={`${styles.player} ${styles[`player--${skin}--${direction}`]}`} />;
};

CustomPlayer.propTypes = {
  skin: PropTypes.oneOf([
    'car',
    'pogo'
  ]),
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right'
  ])
};

export default CustomPlayer;
