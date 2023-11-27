import React from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { twMerge } from 'tailwind-merge';

//make children full width/height tailwind 3.1
const icon = cva(
  [
    `
  [&>*]:w-full 
  [&>*]:h-full
  `,
  ],
  {
    variants: {
      size: {
        XS: ['w-[15px]', 'h-[15px]'],
        S: ['w-[20px]', 'h-[20px]'],
        M: ['w-[25px]', 'h-[25px]'],
        L: ['w-[30px]', 'h-[30px]'],

        XL: ['w-[35px]', 'h-[35px]'],

        XXL: ['w-[40px]', 'h-[40px]'],
        '2XL': ['w-[40px]', 'h-[40px]'],

        XXXL: ['w-[45px]', 'h-[45px]'],
        '3XL': ['w-[45px]', 'h-[45px]'],

        XXXXL: ['w-[50px]', 'h-[50px]'],
        '4XL': ['w-[50px]', 'h-[50px]'],

        XXXXXL: ['w-[55px]', 'h-[55px]'],
        '5XL': ['w-[55px]', 'h-[55px]'],

        XXXXXXL: ['w-[60px]', 'h-[60px]'],
        '6XL': ['w-[60px]', 'h-[60px]'],

        XXXXXXXL: ['w-[70px]', 'h-[70px]'],
        '7XL': ['w-[70px]', 'h-[70px]'],

        XXXXXXXXL: ['w-[80px]', 'h-[80px]'],
        '8XL': ['w-[80px]', 'h-[80px]'],

        XXXXXXXXXL: ['w-[90px]', 'h-[90px]'],
        '9XL': ['w-[90px]', 'h-[90px]'],

        XXXXXXXXXXL: ['w-[100px]', 'h-[100px]'],
        '10XL': ['w-[100px]', 'h-[100px]'],
      },
    },
    defaultVariants: {
      size: 'M',
    },
  },
);

export interface IconProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof icon> {}

const Icon = ({ children, size, className, ...props }: IconProps) => {
  return (
    <div data-component={Icon.displayName} className={icon({ size, className })} {...props}>
      {children}
    </div>
  );
};

Icon.displayName = 'Icon';
export { Icon };

// ------------------------------------------------------------------------------------------------------------------------------------------------
