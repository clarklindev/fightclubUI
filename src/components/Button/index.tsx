import React from 'react'

import styled, { useTheme } from 'styled-components'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { ThemeType } from '../../themes/DefaultTheme'

const button = cva(
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
        class: 'uppercase',
      },
      {
        intent: 'text',
        size: ['medium', 'small'],
        class: ['px-1', 'py-1'],
      },
      {
        intent: 'icon',
        size: ['medium', 'small'],
        class: ['px-0', 'py-0'],
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
)

const StyledButton = styled.button`
  ${button}
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: 'primary' | 'secondary' | 'outlined' | 'contained' | 'text' | 'icon'
  size?: 'small' | 'medium'
  tw?: string
}

const Button = ({ intent, size, className, tw, ...rest }: ButtonProps) => {
  const theme = useTheme() as ThemeType

  const primaryButtonStyles = theme.Button?.primary

  const classes = clsx(
    className,
    {
      [button({ intent, size })]: true,
    },

    intent === 'primary' && primaryButtonStyles,

    tw,
  )

  return (
    <StyledButton
      className={classes}
      aria-label={rest['aria-label'] || 'Button'}
      role="button"
      tabIndex={0}
      {...rest}
    />
  )
}

export default Button
