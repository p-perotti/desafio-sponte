/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Chip from '../Chip';

import { Container, ChipContainer } from './styles';

function ChipInput(props) {
  const { label, name, hint, values, setValues } = props;

  const [newItem, setNewItem] = useState('');

  const handleAddItem = (event) => {
    if ((event.charCode || event.keyCode) === 13) {
      if (!values.find((value) => value === event.target.value)) {
        setValues([...values, event.target.value]);
      }
      setNewItem('');
    }
  };

  const handleRemoveItem = (item) => {
    setValues(values.filter((value) => value !== item));
  };

  return (
    <Container>
      <label htmlFor={name}>
        {label}
        {hint !== '' && <span>{hint}</span>}
        <input
          id={name}
          name={name}
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          onKeyDown={(event) => handleAddItem(event)}
        />
      </label>
      <ChipContainer>
        {values.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => handleRemoveItem(item)}
          />
        ))}
      </ChipContainer>
    </Container>
  );
}

ChipInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  setValues: PropTypes.func.isRequired,
};

ChipInput.defaultProps = {
  hint: '',
};

export default ChipInput;
