import Typography from '@mui/material/Typography';
import React from 'react';
import { TUiColor } from '../UiButton/button.decorator';

export interface IUiIconProps {
  iconName: string;
  className?: string;
  color?: TUiColor | 'default';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function UiIcon({
  iconName,
  className,
  color = 'default',
  onClick,
}: IUiIconProps) {
  return (
    <Typography
      onClick={onClick}
      className={`${className}`}
      variant="body2"
      component="span"
    />
  );
}
