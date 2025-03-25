import React, { Component } from 'react';
import { cva} from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

const avatar = cva(
  ['align-middle rounded-full object-cover aspect-square overflow-hidden'], 
  {
    variants:{
      size: {
        'S': ['w-[30px]', 'h-[30px]'],
        'M': ['w-[45px]', 'h-[45px]'],
        'L': ['w-[60px]', 'h-[60px]'],
      }
    },
    defaultVariants: {
      size: 'M',
    },
  }
);

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatar> {}


const Avatar = ({ className, size, children, ...props }: AvatarProps ) => {
  return (
    <div
      data-component={Avatar.displayName}
      className={avatar({ size, className })} {...props}>
      {children}
    </div>
  );
};

Avatar.displayName = 'Avatar';
export { Avatar };