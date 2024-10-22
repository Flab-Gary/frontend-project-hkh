
'use client'
import classNames from 'classnames';
import type { FC, MouseEventHandler } from 'react';

export interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: keyof ButtonSizeMapper;
  color?: keyof ButtonColorMapper;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export type ButtonColorMapper = {
  blue: string;
  gray: string;
  transparent: string;
};

export type ButtonSizeMapper = {
  small: string;
  medium: string;
  large: string;
};


const Button: FC<ButtonProps> = ({
  label = 'Button',
  onClick,
  color = 'blue',
  size = 'medium',
  type = 'button',
}) => {
  const colorMapper: ButtonColorMapper = {
    blue: 'button-blue',
    gray: 'button-gray',
    transparent: 'button-transparent',
  };
  const sizeMapper: ButtonSizeMapper = {
    small: 'button-small',
    medium: 'button-medium ',
    large: 'button-large',
  };

  const className = classNames(
    'font-medium rounded-lg px-4 py-2',
    colorMapper[color],
    sizeMapper[size]
  );

  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
