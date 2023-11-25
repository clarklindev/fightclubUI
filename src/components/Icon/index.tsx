import React from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { twMerge } from 'tailwind-merge';

//make children full width/height tailwind 3.1
const icon = cva(['[&>*]:w-full [&>*]:h-full'], {
  variants: {
    size: {
      S: ['w-[15px]', 'h-[15px]'],
      M: ['w-[20px]', 'h-[20px]'],
      L: ['w-[25px]', 'h-[25px]'],
      XL: ['w-[30px]', 'h-[30px]'],
      XXL: ['w-[35px]', 'h-[35px]'],
      XXXL: ['w-[40px]', 'h-[40px]'],
    },
  },
  defaultVariants: {
    size: 'M',
  },
});

export interface IconProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof icon> {}

const Icon = ({ children, size, className, ...props }: IconProps) => {
  return (
    <div data-component="Icon" className={icon({ size, className })} {...props}>
      {children}
    </div>
  );
};

Icon.displayName = 'Icon';
export { Icon };

// ------------------------------------------------------------------------------------------------------------------------------------------------
