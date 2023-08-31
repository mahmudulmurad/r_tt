import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type IUiOptions = {
  id: string | number;
  title: string;
};

export interface IUiInputSelectFieldProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  id?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  variant?: "outlined" | "filled" | "standard";
  options?: Record<string, any>[] | IUiOptions[];
}

export function UiSelectFiled(props: IUiInputSelectFieldProps) {
  const { variant, options,label } = props;
  const [data, setData] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant={variant}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          label={label}
          onChange={handleChange}
        >
          {options?.map((option) => (
            <MenuItem key={option['id']} value={option['id']}>
              {option['title']}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
