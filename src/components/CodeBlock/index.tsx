import { CopyBlock, dracula } from 'react-code-blocks';

export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <CopyBlock
      language="jsx"
      text={children?.toString()}
      showLineNumbers={true}
      theme={dracula}
      wrapLines={true}
      codeBlock
    />
  );
};
