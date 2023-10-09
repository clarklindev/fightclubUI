import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import InlineCode from 'react-syntax-highlighter';

import { sunburst } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeBlockProps = {
  children?: React.ReactNode | null;
  type?: string;
  inline?: boolean;
};

const CodeBlockWrapper = styled.div`
  width: 100%;
`;

export const CodeBlock = ({ children, type = 'tsx', inline = false }: CodeBlockProps) => {
  if (children) {
    if (inline) {
      <InlineCode language={type} style={sunburst} customStyle={{ padding: '2rem', borderRadius: '10px' }}>
        {[children.toString()]}
      </InlineCode>;
    }
    return (
      <CodeBlockWrapper>
        <SyntaxHighlighter language={type} style={sunburst} customStyle={{ padding: '2rem', borderRadius: '10px' }}>
          {[children.toString()]}
        </SyntaxHighlighter>
      </CodeBlockWrapper>
    );
  }
  return;
};
