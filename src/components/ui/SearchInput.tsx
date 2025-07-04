import React from 'react';
import { cn } from '../../utils/cn';
import { Search } from '../icons';

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  className,
  inputClassName,
}) => {
  return (
    <div
      className={cn(
        'relative flex items-center w-full max-w-sm bg-[#F6F6F6] rounded-md',
        className
      )}
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AFAFAF] w-4 h-4 pointer-events-none" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'w-full pl-9 pr-3 py-3 text-sm rounded-md outline-none transition placeholder:text-sm placeholder:font-normal placeholder:text-[#757575]',
          ' focus:ring-2 focus:ring-[#4B6A4F] focus:border-[#4B6A4F]',
          inputClassName
        )}
      />
    </div>
  );
};

export default SearchInput;
