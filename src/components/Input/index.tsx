import React, { ReactNode, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputVariants: any = cva(
  ['box-border', 'cursor-text', 'outline-none', 'w-full', 'p-2', 'rounded-md', 'h-10', 'bg-inputBackground'],
  {
    variants: {
      border: {
        false: ['border-transparent', 'px-0', 'rounded-none'],
        true: ['border', 'border-solid', 'border-borderColor'],
      },
      readonly: {
        true: ['text-neutral-300'],
      },
    },
    defaultVariants: {
      border: true,
    },
  },
);

export interface InputVariants extends VariantProps<typeof inputVariants> {
  className?: string;
  tw?: string;
  type?: string;
  border?: boolean;
  children?: React.ReactNode;
  value: string;
  placeholder?: string;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputVariants>(function Input(
  {
    onChange,
    border = true,
    value,
    placeholder = '',
    className,
    readonly = false,
    children,
    type = 'text',
    tw,
    ...rest
  }: InputVariants,
  ref,
) {
  const classes = twMerge(inputVariants({ border, readonly }), className, tw);

  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={classes}
      readOnly={readonly}
      ref={ref}
      {...rest}>
      {children}
    </input>
  );
});

type InputProps = {
  children: ReactNode;
  tw?: string;
};

export const InputWrapper = ({ children }: InputProps) => {
  return (
    <div
      className={twMerge(
        cva([
          'box-border',
          'h-auto',
          'w-full',
          'flex',
          'items-center',
          'flex-grow-1',
          'outline-none',
          'border',
          'border-solid',
          'rounded-md',
          'max-h-10',
          'px-2',
          'gap-2',
          'bg-inputBackground',
          'border-borderColor',
          'overflow-hidden',
        ])(),
      )}>
      {children}
    </div>
  );
};
