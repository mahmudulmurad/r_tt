import React from "react";
import { Box } from "@mui/material";

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
    <Box
      error={error}
      component={component || "label"}
      className={`${className}`}
    >
      {title}
      <Box component="span" className="text-red-500 pl-0.5 pr-1">
        {content}
      </Box>
    </Box>
  );
};
