import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { customeStyle } from "./selectStyle";

type IUiOptions = {
  id: string | number;
  title: string;
};

export interface IUiSelectFieldProps {
  error?: boolean;
  value?: unknown;
  label: string;
  id?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  variant?: "outlined" | "filled" | "standard";
  options: Record<string, any>[] | IUiOptions[];
  onChange?: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode,
    data?: unknown
  ) => void;
  selectedData?: boolean;
  isLoading?: boolean;
  required?: boolean;
}

export function UiSelectFiled(props: IUiSelectFieldProps) {
  const {
    variant,
    options,
    label,
    value,
    onChange,
    selectedData = false,
    error,
    required,
  } = props;
  let optionId = "id";
  let optionLabel = "title";
  const optionsList: Record<string | number, any>[] = options;

  const getSelectedData = (selectedId: unknown) =>
    selectedId
      ? options?.filter(
          (option: Record<string, any> | IUiOptions) =>
            option?.["id"] === selectedId
        )[0]
      : {};
      
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        variant={variant}
        error={error}
        required={required}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          sx={customeStyle}
          id="demo-simple-select"
          value={value === null ? "" : value}
          label={label}
          onChange={(e, child) => {
            if (onChange) {
              onChange(
                e,
                child,
                selectedData && !!e.target.value
                  ? getSelectedData(e.target.value)
                  : {}
              );
            }
          }}
        >
          {optionsList?.map((option: Record<string | number, any>) => (
            <MenuItem key={option[optionId]} value={option[optionId]}>
              {option[optionLabel]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
