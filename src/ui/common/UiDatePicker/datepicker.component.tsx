import { SxProps, Theme } from "@mui/material";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface IUiDatePickerProps {
  sx?: SxProps<Theme>;
  label?: string;
  fullWidth?: boolean;
  value?: string;
  name?: string;
  className?: string;
  onChange?:
    | ((
        value: string | null,
        context: PickerChangeHandlerContext<DateValidationError>
      ) => void)
    | undefined;
  views?: Array<"day" | "month" | "year">;
  readonly?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export function UiDatePicker(props: IUiDatePickerProps) {
  const {
    label,
    value,
    onChange,
    className,
    views = ["year", "month", "day"],
    disabled = false,
    readonly = false,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={views}
        className={className}
        disabled={disabled}
        label={label}
        onChange={onChange}
        value={value}
        sx={{ width: "100%" }}
        readOnly={readonly}
      />
    </LocalizationProvider>
  );
}
