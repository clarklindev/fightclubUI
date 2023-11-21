import React, { useState } from 'react';
import { cn } from '@swagfinger/utils/cn';

type CardProps = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Card = ({ className, ...props }: CardProps) => {
  const [loading] = useState(false);
  return (
    <div
      data-component="Card"
      className={cn('text-white border-gray-300 border rounded-lg h-200 min-h-12 p-10', className, {
        'bg-gray-400': loading,
      })}
      {...props}
    />
  );
};

Card.displayName = 'Card';
export { Card };

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Card is a div tag so we use data-component="Card" to differentiate it from classes which will become random generated characters
