import React from "react";
import { Box, FormLabel } from "@mui/material";

export interface IUiFormLabel {
  title?: React.ReactNode;
  error?: boolean;
  required?: boolean;
  className?: string;
  component?: React.ElementType;
}

export const UiLabelField = (props: IUiFormLabel) => {
  const { title, error, className, component, required = false } = props;
  let content = "";

  if (required) {
    content = "*";
  }

  return (
    <Box>
      <FormLabel
        error={error}
        className={className}
        component={component || "label"}
      >
        {title}
        <Box component="span" className="text-red pl-0.5 pr-1">
          {content}
        </Box>
      </FormLabel>
    </Box>
  );
};
