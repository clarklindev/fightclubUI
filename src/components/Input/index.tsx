import React, { ForwardedRef, ReactNode, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputVariants: any = cva(
  [
    'box-border',
    'cursor-text',
    'outline-none',
    'w-full',
    'p-2',
    'rounded-md',
    'h-10',
    'bg-[var(--input-background-color)]',
  ],
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
  type?: string;
  border?: boolean;
  value: string;
  placeholder?: string;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputVariants>(function Input(
  {
    onChange,
    border = true,
    value,
    placeholder = '',
    className,
    readonly = false,
    type = 'text',
    ...rest
  }: InputVariants,
  ref,
) {
  const classes = twMerge(inputVariants({ border, readonly }), className);

  return (
    <input
      data-component="Input"
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={classes}
      readOnly={readonly}
      ref={ref}
      {...rest}
    />
  );
});

type InputProps = {
  children: ReactNode;
};

const InputWrapper = ({ children }: InputProps) => {
  return (
    <div
      data-component={InputWrapper.displayName}
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
          'bg-[var(--input-background-color)]',
          'border-borderColor',
          'overflow-hidden',
        ])(),
      )}>
      {children}
    </div>
  );
};

InputWrapper.displayName = 'InputWrapper';
export { InputWrapper, Input };
