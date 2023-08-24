import React, { InputHTMLAttributes } from "react";
import TextField from "@mui/material/TextField";

interface TUiInputTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

export const UiInputTextField: React.FC<TUiInputTextFieldProps> = ({
  label,
  id,
  placeholder,
  type,
}) => {
  return (
      <TextField
        variant="outlined"
        placeholder={placeholder}
        id={id}
        label={label}
        type={type}
        fullWidth
      />
  );
};
