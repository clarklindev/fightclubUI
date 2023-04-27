import styled from 'styled-components'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'

const button = cva(
  ['font-semibold', 'border', 'rounded', 'focus:outline-none', 'focus:ring'],
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
  intent?: 'primary' | 'secondary'
  size?: 'small' | 'medium'
  tw?: string
}

const Button = ({ intent, size, className, tw, ...rest }: ButtonProps) => {
  const classes = clsx(
    className,
    {
      [button({ intent, size })]: true,
    },
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
