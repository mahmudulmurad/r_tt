import React, { InputHTMLAttributes } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
    <Box className="w-full m-2">
      <TextField
        variant="outlined"
        placeholder={placeholder}
        id={id}
        label={label}
        type={type}
        fullWidth
      />
    </Box>
  );
};
