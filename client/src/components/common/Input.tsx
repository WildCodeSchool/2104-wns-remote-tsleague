import React from 'react';
import { Field } from 'formik';

import { StyledInput } from '../styles/Login';

export type InputProps = {
  name: string;
  type?: string;
  errors: string | undefined;
  touched: boolean | undefined;
  placeholder?: string;
  fullWidth?: boolean;
};

function Input({
  name,
  type,
  errors,
  touched,
  placeholder,
  fullWidth,
}: InputProps): JSX.Element {
  return (
    <StyledInput fullWidth={fullWidth}>
      <Field name={name} type={type} placeholder={placeholder} />
      {errors && touched ? <div>{errors}</div> : null}
    </StyledInput>
  );
}

export default Input;
