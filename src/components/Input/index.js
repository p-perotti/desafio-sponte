/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, ErrorMessage } from './styles';

function Input({ field, form: { touched, errors }, ...props }) {
  const { type, label, hint } = props;

  return (
    <Container hasError={touched[field.name] && errors[field.name]}>
      <label htmlFor={field.name}>
        {label}
        {hint !== '' && <span>{hint}</span>}
        <input
          type={type}
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

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.objectOf(PropTypes.any).isRequired,
    errors: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

Input.defaultProps = {
  type: 'text',
  hint: '',
};

export default Input;
