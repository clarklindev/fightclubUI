import React from 'react';

const Pill = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <span className={['inline-block px-4 py-1 bg-blue-500 text-white rounded-xl', className].join(' ')}>
      {children}
    </span>
  );
};

Pill.displayName = 'Pill';
export { Pill };
