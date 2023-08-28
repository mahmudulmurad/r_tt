import FormHelperText from '@mui/material/FormHelperText';
import * as React from 'react';

/* eslint-disable-next-line */
export interface IUiFormHelperText {
  helperText?: React.ReactNode | { key: string; default: string };
  error?: boolean;
  className?: string;
}

export function UiFormHelperText(props: IUiFormHelperText) {
  const { helperText, error, className } = props;
  let helperTextLabel;
  if (
    helperText !== null &&
    typeof helperText === 'object' &&
    'key' in helperText &&
    'default' in helperText
  ) {
    helperTextLabel =helperText.key;
    if (!helperTextLabel) helperTextLabel = helperText.default;
  } else {
    helperTextLabel = helperText;
  }
  return (
    <FormHelperText
      error={error}
      className={`${className}`}
    >
      {helperTextLabel}
    </FormHelperText>
  );
}
