import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../utils/cn';

type CardProps = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  const [loading] = useState(false);
  return (
    <div
      className={cn('text-white border-gray-300 border rounded-lg h-200', className, { 'bg-gray-400': loading })}
      {...props}
    />
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------
