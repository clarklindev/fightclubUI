import React from 'react';

interface CodeBlockProps {
  readOnly?: boolean;
  editable?: boolean;
  children?: string | React.ReactNode | undefined;
}

const CodeBlock = ({ children }: CodeBlockProps) => {

  return (
    <div>
      {children}
    </div>
  );
};

export { CodeBlock };
