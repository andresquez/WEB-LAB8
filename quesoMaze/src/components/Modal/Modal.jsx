import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const CustomModal = ({ children }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomModal;
