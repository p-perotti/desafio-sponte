import React from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

function Chip(props) {
  const { label, onClick } = props;

  return (
    <Container>
      <span>{label}</span>
      <button type="button" onClick={onClick}>
        <FiX />
      </button>
    </Container>
  );
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Chip;
