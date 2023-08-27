import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";
import { useMemo } from "react";
import { TUiColor, TVariant } from "./button.decorator";
import { Box } from "@mui/material";

/* eslint-disable-next-line */
export interface IUiButtonProps {
  id?: string;
  title?: React.ReactNode;
  color?: TUiColor;
  type?: "button" | "submit";
  size?: "small" | "medium" | "large";
  variant?: TVariant;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const settings: Record<string, any> = {
  text: {
    color: "#28A9E1",
  },
  outlined: {
    color: "#28A9E1",
    warning: {
      color: "#warning",
    },
    success: {
      color: "#success",
    },
    error: {
      color: "#error",
    },
    secondary: {
      color: "#secondary",
    },
    info: {
      color: "#info",
    },
  },
  contained: {
    color: "#fff",
    primary: {
      color: "#fff",
    },
  },
};
const getSettings = (
  key: string,
  color: TUiColor,
  variant: TVariant
): Record<string, any> => {
  try {
    const value =
      settings?.[variant]?.[color]?.[key] ||
      settings?.[variant]?.[key] ||
      false;
    if (value !== false) {
      return { [key]: value };
    }
    return {};
  } catch (error) {
    return {};
  }
};

/** This is basic button */
export function UiButton(props: IUiButtonProps) {
  const {
    id,
    color = "primary",
    size = "medium",
    variant = "contained",
    endIcon,
    startIcon,
    isLoading,
    title,
    href,
    disabled,
    fullWidth,
    style,
    onClick,
    type,
    className,
  } = props;

  const startIconComponent = useMemo(() => {
    return isLoading ? <CircularProgress size={15} color={color} /> : startIcon;
  }, [isLoading, startIcon, color]);

  return (
    <Box
      className={`mt-1 ${className} normal-case ${getSettings(
        "color",
        color,
        variant
      )}`}
    >
      <Button
        id={id}
        type={type}
        variant={variant}
        color={color}
        endIcon={endIcon}
        startIcon={startIconComponent}
        size={size}
        href={href}
        disabled={disabled || isLoading}
        fullWidth={fullWidth}
        style={{ ...style }}
        onClick={onClick}
        className={className}
      >
        {title}
      </Button>
    </Box>
  );
}
