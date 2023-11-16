import React from 'react';
import CodeMirror, { ViewUpdate } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';
import reactElementToJSXString from 'react-element-to-jsx-string';

interface CodeBlockProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CodeBlock = ({ value, setValue }: CodeBlockProps) => {
  const onChangeHandler = (val: string, viewUpdate: any) => {
    setValue(val);
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <CodeMirror
        value={value}
        theme={githubDark}
        extensions={[javascript({ jsx: true })]}
        onChange={onChangeHandler}
      />
    </div>
  );
};
