import React, { InputHTMLAttributes } from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";

interface TUiInputTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  name: string;
  variant: TextFieldVariants;
}

export const UiInputTextField: React.FC<TUiInputTextFieldProps> = ({
  label,
  id,
  placeholder,
  type = "text",
  name,
  variant = "outlined",
}) => {
  return (
    <TextField
      variant={variant}
      name={name}
      placeholder={placeholder}
      id={id}
      label={label}
      type={type}
      fullWidth
    />
  );
};
