import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function TextArea(props) {
  const { label, name } = props;

  return (
    <Container>
      <label htmlFor={name}>
        {label}
        <textarea id={name} />
      </label>
    </Container>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextArea;
