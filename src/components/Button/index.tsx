import React from 'react'

import { useTheme } from 'styled-components'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import { ThemeType } from '../../themes/DefaultTheme'

const buttonVariants = cva(
  [
    'font-semibold',
    'border',
    'rounded',
    'focus:outline-none',
    'focus:ring',
    'box-border',
    'inline-flex',
    'items-center',
    'justify-center',
    'h-auto',
    'cursor-pointer',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-blue-500',
          'text-white',
          'border-transparent',
          'hover:bg-blue-600',
        ],
        secondary: [
          'bg-white',
          'text-gray-800',
          'border-gray-400',
          'hover:bg-gray-100',
        ],
        contained: [
          'bg-gray-300',
          'text-gray-700',
          'border-gray-300',
          'hover:bg-gray-400',
        ],
        outlined: [
          'text-black',
          'border-black',
          'bg-transparent',
          'hover:bg-gray-700',
          'hover:text-white',
        ],
        text: ['border-transparent', 'underline'],
        icon: ['border-transparent'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: 'medium',
        className: 'uppercase',
      },
      {
        intent: 'text',
        size: ['medium', 'small'],
        className: ['px-1', 'py-1'],
      },
      {
        intent: 'icon',
        size: ['medium', 'small'],
        className: 'px-0 py-0',
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
)

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  className?: string
  tw?: string
  ariaLabel?: string
}

const Button = ({
  intent,
  size,
  className,
  tw,
  ariaLabel,
  ...rest
}: ButtonVariants) => {
  const theme = useTheme() as ThemeType

  const classes = twMerge(
    className,

    buttonVariants({ intent, size }),

    intent === 'primary' && theme.Button?.primary,
    intent === 'outlined' && theme.Button?.outlined,
    tw,
  )

  return (
    <button
      className={classes}
      aria-label={ariaLabel || 'Button'}
      role="button"
      tabIndex={0}
      {...rest}
    />
  )
}

export default Button
