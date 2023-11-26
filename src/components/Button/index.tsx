import React, { forwardRef } from 'react';

import { useTheme } from '@swagfinger/context/ThemeContext';

import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants: any = cva(['box-border', 'inline-flex', 'items-center', 'cursor-pointer'], {
  variants: {
    intent: {
      default: '',
      primary: 'bg-blue-500 text-white border-transparent hover:bg-blue-600',
      secondary: 'bg-white text-gray-800 border-gray-400 hover:bg-gray-100',
      contained: 'bg-gray-300 text-gray-700 border-gray-300 hover:bg-gray-400',

      outlined: `
        text-red-400
        dark:text-blue-500
        
        
        border
        border-red-400 
        dark:border-white

        bg-transparent
        
        hover:bg-gray-700 
        hover:text-white
      `,

      plain: 'border-transparent outline-none ring-transparent',
      text: 'border-transparent underline',
      icon: 'border-transparent',
    },

    padding: {
      default: '',
      S: 'py-1 px-1',
      M: 'py-1 px-2',
      L: 'py-1 px-3',
      XL: 'py-1 px-4',
    },

    fontsize: {
      default: '',
      small: 'text-sm',
      medium: 'text-base',
    },

    focus: {
      default: '',
      border: 'focus:outline-none focus:border-black',
    },
  },

  compoundVariants: [],

  //if no intent is passed in, use below..
  defaultVariants: {
    intent: 'primary',
    fontsize: 'default',
    focus: 'default',
    padding: 'XL',
  },
});

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
  intent?: string;
  padding?: string;
  fontsize?: string;
  focus?: string;
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

const Button = forwardRef<HTMLButtonElement, ButtonVariants>((props, ref) => {
  const {
    intent = 'primary',
    padding,
    fontsize,
    focus,
    className,
    onClick,
    onFocus,
    onBlur,
    ariaLabel = 'Button',
    children,
    ...rest
  } = props;

  const { theme } = useTheme();
  ``;
  const classes = twMerge(
    theme
      ? [theme.Button.intent[intent as keyof typeof theme.Button.intent]].join(' ')
      : buttonVariants({ intent, fontsize, padding, focus }),
    className,
  );

  return (
    <button
      data-component={Button.displayName}
      className={classes}
      aria-label={ariaLabel}
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

Button.displayName = 'Button';
export { Button };
