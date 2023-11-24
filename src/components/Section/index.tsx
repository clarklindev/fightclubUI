import React from 'react';

const Section = ({ children, className = 'mb-8' }: { className?: string; children: React.ReactNode }) => {
  return (
    <div data-component={Section.displayName} className={className}>
      {children}
    </div>
  );
};

Section.displayName = 'Section';
export { Section };
