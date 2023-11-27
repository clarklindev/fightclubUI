import React, { useState, useEffect, useRef } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';
import { sass } from '@codemirror/lang-sass';
import { less } from '@codemirror/lang-less';

import reactElementToJSXString from 'react-element-to-jsx-string';

const extensions = [javascript({ jsx: true }), less(), sass()];

interface CodeBlockProps {
  readOnly?: boolean;
  editable?: boolean;
  children?: string | React.ReactNode | undefined;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    let codeStr = '';
    if (typeof children === 'string') {
      codeStr = children;
      setCode(codeStr);
    } else if (children !== undefined && children !== null) {
      codeStr = reactElementToJSXString(children);
      setCode(codeStr);
    }
  }, [children]);

  return (
    <div data-component={CodeBlock.displayName}>
      <CodeMirror
        className="[&_.cm-content]:p-4"
        theme={githubDark}
        extensions={extensions}
        value={code}
        readOnly={true}
        editable={false}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
      />
    </div>
  );
};

CodeBlock.displayName = 'CodeBlock';
export { CodeBlock };
