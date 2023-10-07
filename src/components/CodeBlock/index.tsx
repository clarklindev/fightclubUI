import { CopyBlock, dracula } from 'react-code-blocks';
import styled from 'styled-components';

export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return <CopyBlock language="jsx" text={children} showLineNumbers="true" theme={dracula} wrapLines={true} codeBlock />;
};
