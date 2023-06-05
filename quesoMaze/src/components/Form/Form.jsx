import { useState } from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    mazeWidth: '5',
    mazeHeight: '5',
    theme: 'race',
    skin: 'car',
    timer: '30',
    useTimer: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const handleThemeChange = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      theme: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    setFormValues({
      mazeWidth: '',
      mazeHeight: '',
      theme: 'race',
      skin: 'car',
      timer: '',
      useTimer: false,
    });
  };

  return (
    <div className={styles.form}>
      <span className={styles.titulo}> QUESO MAZE </span>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <span className={styles.labeltext}>Ancho del laberinto</span>
          <input
            className={styles.input}
            type="number"
            id="mazeWidth"
            placeholder="5"
            name="mazeWidth"
            min="4"
            max="100"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <span className={styles.labeltext}>Largo del laberinto</span>
          <input
            className={styles.input}
            type="number"
            id="mazeHeight"
            placeholder="5"
            name="mazeHeight"
            min="4"
            max="100"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.pillsContainer}>
            <label
              className={`${styles.pill} ${formValues.theme === 'race' ? styles.pillSelected : ''}`}
            >
              <input
                type="radio"
                name="theme"
                value="race"
                checked={formValues.theme === 'race'}
                onChange={handleThemeChange}
              />
              Race theme
            </label>
            <label
              className={`${styles.pill} ${formValues.theme === 'garden' ? styles.pillSelected : ''}`}
            >
              <input
                type="radio"
                name="theme"
                value="garden"
                checked={formValues.theme === 'garden'}
                onChange={handleThemeChange}
              />
              Garden theme
            </label>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <select
            className={styles.select}
            id="skin"
            name="skin"
            value={formValues.skin}
            onChange={handleChange}
          >
            <option value="car">Car</option>
            <option value="pogo">Pogo</option>
          </select>

        </div>

        <button type="submit" className={styles.button}>
          Jugar
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
