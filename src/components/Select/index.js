import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Select(props) {
  const { name, options } = props;

  return (
    <Container>
      <select value="" id={name}>
        <option value="" disabled hidden>
          Selecione uma opção...
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf([PropTypes.object]).isRequired,
};

export default Select;
