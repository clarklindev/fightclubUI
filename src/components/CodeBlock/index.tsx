import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeBlockProps = {
  children?: React.ReactNode | null;
  type?: string;
};

export const CodeBlock = ({ children, type = 'tsx' }: CodeBlockProps) => {
  if (children) {
    return (
      <SyntaxHighlighter language={type} style={sunburst} customStyle={{ padding: '1rem', borderRadius: '10px' }}>
        {[children.toString()]}
      </SyntaxHighlighter>
    );
  }
  return;
};
