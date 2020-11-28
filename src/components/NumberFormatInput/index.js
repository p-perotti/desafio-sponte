import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import { Container, ErrorMessage } from './styles';

function NumberFormatInput({ field, form: { touched, errors }, ...props }) {
  const { label, hint, prefix, decimalScale, thousandSeparator } = props;

  return (
    <Container hasError={touched[field.name] && errors[field.name]}>
      <label htmlFor={field.name}>
        {label}
        {hint !== '' && <span>{hint}</span>}
        <NumberFormat
          id={field.name}
          name={field.name}
          prefix={prefix}
          decimalScale={decimalScale}
          decimalSeparator=","
          thousandSeparator={thousandSeparator}
          fixedDecimalScale
          isNumericString
          value={field.value}
          onValueChange={(values) => {
            field.onChange({
              target: {
                name: field.name,
                value: values.value,
              },
            });
          }}
          onBlur={field.onBlur}
        />
        {touched[field.name] && errors[field.name] && (
          <ErrorMessage>{errors[field.name]}</ErrorMessage>
        )}
      </label>
    </Container>
  );
}

NumberFormatInput.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  prefix: PropTypes.string,
  decimalScale: PropTypes.number,
  thousandSeparator: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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

NumberFormatInput.defaultProps = {
  hint: '',
  prefix: 'R$',
  decimalScale: 2,
  thousandSeparator: '.',
};

export default NumberFormatInput;
