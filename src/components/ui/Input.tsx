import React from 'react';
import clsx from 'clsx';

export type InputProps = {
  label?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      type = 'text',
      placeholder = '',
      value,
      defaultValue,
      error,
      className = '',
      inputClassName = '',
      onChange,
      disabled,
      children
    },
    ref
  ) => {
    return (
      <div className={clsx('w-full', className)}>
        {label && (
          <label
            htmlFor={name}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        {children}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={clsx(
            'w-full px-3 py-2 text-sm border rounded-md outline-none',
            'transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error ? 'border-red-500' : 'border-gray-300',
            inputClassName
          )}
        />
        {error && (
          <p className="mt-1 text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
