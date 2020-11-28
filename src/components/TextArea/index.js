import React from 'react';
import PropTypes from 'prop-types';

import { Container, ErrorMessage } from './styles';

function TextArea({ field, form: { touched, errors }, ...props }) {
  const { label } = props;

  return (
    <Container>
      <label htmlFor={field.name}>
        {label}
        <textarea
          id={field.name}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
        {touched[field.name] && errors[field.name] && (
          <ErrorMessage>{errors[field.name]}</ErrorMessage>
        )}
      </label>
    </Container>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.any).isRequired,
    errors: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default TextArea;
