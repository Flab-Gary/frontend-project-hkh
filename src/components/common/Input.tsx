'use client'
import classNames from 'classnames';
import type { ChangeEvent, FC } from 'react';

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  labelFor: string;
  disabled?: boolean;
  placeholder?: string;
  size?: keyof InputSizeMapper;
  color?: keyof InputBorderColorMapper;
  required?: boolean;
}

export type InputBorderColorMapper = {
  blue: string;
  gray: string;
};

export type InputSizeMapper = {
  small: string;
  medium: string;
  large: string;
};

const Input: FC<InputProps> = ({
  placeholder,
  labelFor,
  onChange,
  disabled,
  value,
  size = 'medium',
  color = 'gray',
  required,
}) => {
  const colorMapper = {
    blue: 'input-blue',
    gray: 'input-gray',
  };

  const sizeMapper = {
    small: 'input-small',
    medium: 'input-medium',
    large: 'input-large',
  };

  const className = classNames(
    'rounded-lg p-4 pl-10',
    sizeMapper[size],
    colorMapper[color]
  );
  return (
    <>
      <label htmlFor={labelFor} />
      <input
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        id={labelFor}
        className={className}
        required={required}
      />
    </>
  );
};

export default Input;
