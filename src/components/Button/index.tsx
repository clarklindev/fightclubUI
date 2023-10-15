import React, { forwardRef } from 'react';

import { useTheme } from 'styled-components';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ThemeType } from '../../themes/LightTheme';

const buttonVariants: any = cva(
  //default styles
  [
    'block',
    'font-semibold',
    'border-2',
    'border-red-600',
    'rounded',
    'focus:outline-none',
    'focus:border-black',
    'box-border',
    'inline-flex',
    'items-center',
    'h-auto',
    'cursor-pointer',
  ],
  {
    variants: {
      //apply styles based on prop passed though
      intent: {
        primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
        secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
        contained: ['bg-gray-300', 'text-gray-700', 'border-gray-300', 'hover:bg-gray-400'],
        outlined: ['text-black', 'border-black', 'bg-transparent', 'hover:bg-gray-700', 'hover:text-white'],
        plain: ['border-transparent', 'outline-none', 'ring-transparent'],
        text: ['border-transparent', 'underline'],
        icon: ['border-transparent'],
      },
      padding: {
        none: ['px-0', 'py-0'],
        small: ['px-2', 'py-1'],
        medium: ['px-4', 'py-2'],
      },
      size: {
        small: ['text-sm'],
        medium: ['text-base'],
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
        className: ['px-0', 'py-0'],
      },
    ],

    //if no intent is passed in, use below..
    defaultVariants: {
      intent: 'primary',
      padding: 'medium',
      size: 'medium',
    },
  },
);

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  intent?: string;
  padding?: string;
  size?: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonVariants>((props, ref) => {
  const { intent, padding, size, className, onClick, onFocus, onBlur, ariaLabel, children, ...rest } = props;

  //<Button className={`cn(buttonVariants(...`{ intent: 'primary'}), className)}/>;

  const theme = useTheme() as ThemeType;

  const classes = twMerge(
    buttonVariants({ intent, size, padding }),
    className,

    intent === 'primary' && theme.Button?.primary,
    intent === 'outlined' && theme.Button?.outlined,
  );

  return (
    <button
      className={classes}
      aria-label={ariaLabel || 'Button'}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onFocus={onFocus} // Pass onFocus
      onBlur={onBlur} // Pass onBlur
      ref={ref}
      {...rest}>
      {children}
    </button>
  );
});
