import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeBlockProps = {
  children?: React.ReactNode | null;
  type?: string;
};

const CodeBlockWrapper = styled.div`
  width: 100%;
`;

export const CodeBlock = ({ children, type = 'tsx' }: CodeBlockProps) => {
  if (children) {
    return (
      <CodeBlockWrapper>
        <SyntaxHighlighter language={type} style={sunburst}>
          {[children.toString()]}
        </SyntaxHighlighter>
      </CodeBlockWrapper>
    );
  }
  return;
};
