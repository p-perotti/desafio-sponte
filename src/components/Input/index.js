import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input(props) {
  const { label, name, hint } = props;

  return (
    <Container>
      <label htmlFor={name}>
        {label}
        <span>{hint}</span>
        <input type="text" id={name} />
      </label>
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
};

Input.defaultProps = {
  hint: '',
};

export default Input;
