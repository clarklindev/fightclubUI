import React, { ReactNode, forwardRef } from 'react'

import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import { twMerge } from 'tailwind-merge'

const inputVariants = cva(
  [
    'box-border',
    'cursor-text',
    'outline-none',
    'w-full',
    'p-2',
    'rounded-md',
    'h-10',
    'bg-inputBackground',
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
)

export interface InputVariants extends VariantProps<typeof inputVariants> {
  className?: string
  tw?: string
  type: string
  border?: boolean
  children: React.ReactNode
  savedData: string
  placeholder: string
  readonly: boolean
  onChange?: () => void
}

const Input = forwardRef<HTMLInputElement, InputVariants>(function Input(
  {
    onChange,
    border,
    savedData,
    placeholder,
    className,
    readonly,
    children,
    type,
    tw,
    ...rest
  }: InputVariants,
  ref,
) {
  const classes = twMerge(inputVariants({ border, readonly }), className, tw)

  return (
    <input
      type={type}
      onChange={onChange}
      value={savedData}
      placeholder={placeholder}
      className={classes}
      readOnly={readonly}
      ref={ref}
      {...rest}
    >
      {children}
    </input>
  )
})

interface Props {
  children: ReactNode
  tw?: string
}

const wrapperInputVariants = cva([
  'overflow-hidden',
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
])

export const InputWrapper = ({ children, tw }: Props) => {
  const wrapperClasses = twMerge(wrapperInputVariants(), tw)

  return <div className={wrapperClasses}>{children}</div>
}

export default Input
