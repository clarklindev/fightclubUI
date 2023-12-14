import React from 'react';

import { Icon } from '@swagfinger/components';

type RadioButtonProps = {
  checked: boolean;
  name: string;
  label?: string;
  size?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ checked, name, label, onChange, size = 'XL' }: RadioButtonProps) => {
  return (
    <label
      data-component={RadioButton.name}
      className={`
flex 
flex-row 
items-center 
w-full 
h-full 
gap-1
    `}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        name={name}
        className={`
border-0 
border-box
clip-[rect(0 0 0 0)] 
clip-path-[inset(50%)] 
h-0 
w-0 
m-n1 
hidden
overflow-hidden 
p-0 
absolute 
whitespace-nowrap
        `}
      />
      <div
        className={`
flex 
items-center
justify-items-center 
relative 
box-border 
cursor-pointer 
rounded-full
border-[var(--border)]
bg-[var(input-background-color)]
      `}>
        <Icon size={size}>
          {checked ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="14" fill="currentColor"></circle>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill={`var(--clr-background)`} viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="14" stroke="var(--clr-foreground)" strokeWidth={1}></circle>
            </svg>
          )}
        </Icon>
      </div>
      {label}
    </label>
  );
};

RadioButton.displayName = 'RadioButton';
export { RadioButton };
