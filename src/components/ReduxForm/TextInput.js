/* @flow */

import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  input: Object,
  meta: {
    touched: boolean,
    error: String,
  },
};

export default (props: Props) => {
  const {
    input,
    meta: { touched, error },
    ...inputProps
  } = props;

  const isError: boolean = touched && !!error;

  return (
    <TextField
      {...inputProps}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      onChange={input.onChange}
      value={input.value}
      error={isError}
      helperText={isError ? error : ''}
    />
  );
};
