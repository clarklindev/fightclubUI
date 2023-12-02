import React, { useEffect, useRef } from 'react';

import { Icon } from '..';

type CheckboxProps = {
  checked: boolean;
  name: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: string;
  indeterminate?: boolean;
};

const Checkbox = ({ checked, name, label, onChange, size = 'XL', indeterminate = false }: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      data-component={Checkbox.name}
      className={`
w-[${size}] 
h-[${size}]
bg-transparent
flex
relative
box-border
    `}>
      <input
        type="checkbox"
        className={`
border-0
h-0
w-0
overflow-hidden
absolute
top-0
left-0
    `}
        checked={checked}
        ref={inputRef}
        onChange={onChange}
        name={name}
      />

      <div
        className={`
cursor-pointer
flex
items-center
justify-center
relative
overflow-hidden 
w-full
h-full
border-[var(--border)]
bg-[var(input-background-color)]
    `}>
        {indeterminate ? (
          <Icon size={size}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10">
              <rect width="100%" height="100%" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </Icon>
        ) : checked ? (
          <Icon size={size}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10">
              <rect width="100%" height="100%" />
              <line x1="6" y1="12" x2="10" y2="16" />
              <line x1="10" y1="16" x2="18" y2="8" />
            </svg>
          </Icon>
        ) : (
          <Icon size={size}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <rect width="100%" height="100%" />
            </svg>
          </Icon>
        )}
      </div>
      <span>{label}</span>
    </label>
  );
};

Checkbox.displayName = 'Checkbox';
export { Checkbox };
