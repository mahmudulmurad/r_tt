import { SxProps } from "@mui/material";

export const customeStyle: SxProps = {
  ".MuiFormLabel-root": {
    fontSize: "14px",
  },

  ".MuiInputBase-input": {
    fontSize: "14px",
  },
  ".MuiInputBase-input[type=date]::placeholder": {
    opacity: 0,
    visibility: "hidden",
  },
};
