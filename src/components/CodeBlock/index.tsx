import { useEffect } from 'react';
import Prism from 'prismjs'; // Import Prism.js library
import 'prismjs/themes/prism.css'; // Import Prism.js CSS theme for styling

type CodeBlockProps = {
  language: string;
  children: React.ReactNode;
};

export const CodeBlock = (props: CodeBlockProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { language, children } = props;
  const trimmedtext = (children as string).trim();
  return (
    <div>
      <pre>
        <code className={`language-${language}`}>{trimmedtext}</code>
      </pre>
    </div>
  );
};
