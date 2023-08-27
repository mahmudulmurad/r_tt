import React, { InputHTMLAttributes } from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { FieldErrors } from "react-hook-form";
import { Box } from "@mui/material";
import { UiFormHelperText } from "../UiHelpertext/UiHelperText.component";
import { UiIcon } from "../UiIcon/UiIcon.component";
export interface IUiInputTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  name: string;
  variant: TextFieldVariants;
  error?: boolean;
  helperText?: React.ReactNode;
  errors?: FieldErrors;
  onEnter?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export const UiInputTextField: React.FC<IUiInputTextFieldProps> = ({
  style,
  label,
  name,
  id,
  placeholder,
  type = "text",
  variant = "outlined",
  error,
  helperText,
  onChange,
}) => {
  return (
    <>
      <TextField
        style={{ ...style }}
        variant={variant}
        name={name}
        placeholder={placeholder}
        id={id}
        label={label}
        type={type}
        fullWidth
        error={error}
        helperText={undefined}
        onChange={onChange}
        /* InputLabelProps={{
          style: { top: '-0.9rem' },
        }} */
      />
      {helperText && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "5px",
            "& .uiFormHelperText": {
              m: 0,
            },
          }}
        >
          {error && <UiIcon iconName="icon-error" color={"error"} />}
          <UiFormHelperText helperText={helperText} error={error} />
        </Box>
      )}
    </>
  );
};
