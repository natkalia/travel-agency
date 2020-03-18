import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    /* setOptionValue coming from OrderOption */
    onChange={e => setOptionValue(e.currentTarget.value)}
  >

    {required ? '' : (
      <option 
        key='null' 
        value=''
      >
        ---
      </option>
    )}

    {values.map(value => (
      <option key={value.id} value={value.id}>
        {value.name} ({formatPrice(value.price)})
      </option>
    ))}

  </select>
);

OrderOptionDropdown.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionDropdown;