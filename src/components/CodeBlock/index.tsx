import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import InlineCode from 'react-syntax-highlighter';

import { useTheme } from '../../context/ThemeContext';

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
  const { isDarkMode } = useTheme();

  if (children) {
    if (inline) {
      return (
        <InlineCode language={type} style={sunburst} customStyle={{ padding: '2rem', borderRadius: '10px' }}>
          {[children.toString()]}
        </InlineCode>
      );
    }
    return (
      <CodeBlockWrapper>
        <SyntaxHighlighter
          language={type}
          style={sunburst}
          customStyle={{
            padding: '2rem',
            borderRadius: '10px',
            background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 1)',
          }}>
          {[children.toString()]}
        </SyntaxHighlighter>
      </CodeBlockWrapper>
    );
  }
  return;
};
