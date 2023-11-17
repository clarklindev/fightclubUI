import React, { useState, useEffect } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';
import { sass } from '@codemirror/lang-sass';
import { less } from '@codemirror/lang-less';

import reactElementToJSXString from 'react-element-to-jsx-string';
import { useCode } from '@swagfinger/context/CodeBlockContext';

import './styles.css';

interface CodeBlockProps {
  children?: React.ReactNode | string;
  readOnly?: boolean;
  editable?: boolean;
}

const extensions = [javascript({ jsx: true }), less(), sass()];

export const CodeBlock = ({ children, readOnly = true, editable = false, ...props }: CodeBlockProps) => {
  const [val, setVal] = useState<undefined | string>();
  const { setCode } = useCode();

  useEffect(() => {
    if (children) {
      let codeStr = '';
      if (typeof children === 'string') {
        codeStr = children;
        setVal(codeStr);
        setCode(codeStr);
      } else {
        codeStr = reactElementToJSXString(children);
        setVal(codeStr);
        setCode(codeStr);
      }
    }
  }, [children]);

  const onChangeHandler = (value: string) => {
    setVal(value);

    //BROADCAST - decouple
    setCode(value);
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <CodeMirror
        className="code-mirror"
        value={val}
        theme={githubDark}
        extensions={extensions}
        onChange={onChangeHandler}
        editable={editable}
        readOnly={readOnly}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
        {...props}
      />
    </div>
  );
};
