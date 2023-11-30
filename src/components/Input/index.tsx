import React, { ForwardedRef, ReactNode, forwardRef, InputHTMLAttributes, HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import { useTheme } from '@swagfinger/context/ThemeContext';
import { getTailwindClassesFromThemeComponent } from '@swagfinger/utils/getTailwindClassesFromThemeComponent';

const InputVariants = cva(
  `items-center 
  box-border
  cursor-text
  focus:outline-none
  border-none
  w-full
  rounded-md
  h-10
  max-h-10
  px-2
  gap-2
  bg-[var(--input-background-color)]
  overflow-hidden`,
  {
    variants: {
      variant: {
        default: `border 
          border-solid 
          flex
          items-center
          border-[var(--border-color)]`,
        unstyled: `bg-transparent
          border-0 
          border-transparent 
          px-0 
          rounded-none`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  variants?: VariantProps<typeof InputVariants>;
}

const Input = ({ className, variants, children, ...props }: InputProps) => {
  // const { theme } = useTheme();

  const classes = twMerge(
    // theme ? getTailwindClassesFromThemeComponent(theme.Input) :
    InputVariants({ ...variants }),
    className,
  );

  return (
    <div data-component={Input.displayName} className={classes} {...props}>
      {children}
    </div>
  );
};

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputElement = ({
  onChange,
  value,
  placeholder = '',
  className,
  readOnly = false,
  type = 'text',
  ...props
}: InputElementProps) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      className={twMerge(
        `border-none
      focus:outline-none
      flex
      h-full
      w-full
      bg-transparent`,
        readOnly &&
          `text-neutral-300
      cursor-default
      select-none
      `,
        className,
      )}
      {...props}
    />
  );
};

InputElement.displayName = 'Input.InputElement';
Input.InputElement = InputElement;

Input.displayName = 'Input';
export { Input };
