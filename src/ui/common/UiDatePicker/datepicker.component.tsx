import DatePicker from "@mui/lab/DatePicker";
import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  SxProps,
  TextField,
  TextFieldVariants,
  Theme,
} from "@mui/material";
import { JSX } from "react/jsx-runtime";

export type TUiColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

type TInputFormat = "dd/MM/yyyy" | "dd-MM-yyyy";

export interface IUiDatePickerProps {
  title?: React.ReactNode;
  color?: TUiColor;
  variant?: "outlined" | "filled" | "standard";
  sx?: SxProps<Theme>;
  error?: boolean;
  placeholder?: string;
  label?: string;
  fullWidth?: boolean;
  value?: string;
  name?: string;
  className?: string;
  onChange?: (value: string) => void;
  views?: Array<"day" | "month" | "year">;
  readonly?: boolean;
  inputFormat?: TInputFormat;
}

export function UiDatePicker(props: IUiDatePickerProps) {
  const {
    variant = "outlined",
    error,
    placeholder,
    label,
    fullWidth,
    color,
    value,
    onChange,
    name,
    views = ["year", "month", "day"],
    inputFormat = "dd/MM/yyyy",
  } = props;

  return (
    <DatePicker
      sx={{ minWidth: 120 }}
      value={value}
      onChange={onChange}
      views={views}
      inputFormat={inputFormat}
      label={label}
      renderInput={(
        params: JSX.IntrinsicAttributes & {
          variant?: TextFieldVariants | undefined;
        } & Omit<
            | OutlinedTextFieldProps
            | FilledTextFieldProps
            | StandardTextFieldProps,
            "variant"
          >
      ) => (
        <TextField
          {...params}
          name={name}
          color={color}
          fullWidth={fullWidth}
          error={error}
          variant={variant}
          helperText={undefined}
          placeholder={placeholder}
        />
      )}
    />
  );
}
