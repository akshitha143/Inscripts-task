import React from 'react';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'active';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'default',
  size = 'md',
  disabled = false,
  loading = false,
  className,
  onClick,
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-md transition hover:cursor-pointer';

  const variantStyle = {
    default: 'bg-[#FFFFFF] border rounded-lg border-[#EEEEEE] font-light',
    active: 'bg-[#4B6A4F] rounded-lg border-none font-normal'
  }[variant];

  const sizeStyle = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  }[size];

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        baseStyle,
        variantStyle,
        sizeStyle,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin " />}
      {children}
    </button>
  );
};

export default Button;
