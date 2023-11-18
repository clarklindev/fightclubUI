import React, { useState, useEffect } from 'react';
import * as ReactComponents from '@swagfinger/components';

import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';
import { sass } from '@codemirror/lang-sass';
import { less } from '@codemirror/lang-less';

import JsxParser from 'react-jsx-parser';

import reactElementToJSXString from 'react-element-to-jsx-string';
import { useCode } from '@swagfinger/context/CodeBlockContext';

import './styles.css';

const extensions = [javascript({ jsx: true }), less(), sass()];

interface CodeBlockProps {
  readOnly?: boolean;
  editable?: boolean;
  children?: string | React.ReactNode | undefined;
}

const CodeBlock = ({ children, editable = false, readOnly = true }: CodeBlockProps) => {
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
    <CodeMirror
      className="code-mirror"
      theme={githubDark}
      extensions={extensions}
      value={code}
      editable={editable}
      readOnly={readOnly}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        highlightActiveLine: false,
      }}
    />
  );
};

const Preview = () => {
  const [internalCode, setInternalCode] = useState<string>('');
  const { preview } = useCode();

  useEffect(() => {
    if (preview) {
      setInternalCode(preview);
    }
  }, [preview]);

  type ComponentsType = {
    [key: string]: React.ComponentType<any>;
  };
  const dynamicComponents: ComponentsType = {};
  const components = ReactComponents as ComponentsType;
  for (const componentName in components) {
    dynamicComponents[componentName] = components[componentName];
  }

  return <JsxParser bindings={{}} components={dynamicComponents} jsx={internalCode} />;
};

const Playground = ({ children, editable = false, readOnly = true }: CodeBlockProps) => {
  const { preview, setPreview } = useCode();

  useEffect(() => {
    if (children) {
      let codeStr = '';
      if (typeof children === 'string') {
        codeStr = children;
        setPreview(codeStr);
      } else if (children !== undefined && children !== null) {
        codeStr = reactElementToJSXString(children);
        setPreview(codeStr);
      }
    }
  }, [children]);

  const onChangeHandler = (value: string) => {
    setPreview(value);
  };

  return (
    <CodeMirror
      className="code-mirror"
      theme={githubDark}
      extensions={extensions}
      value={preview}
      onChange={onChangeHandler}
      editable={editable}
      readOnly={readOnly}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
        highlightActiveLine: false,
      }}
    />
  );
};

Playground.displayName = 'CodeBlock.Playground';
CodeBlock.Playground = Playground;

Preview.displayName = 'CodeBlock.Preview';
CodeBlock.Preview = Preview;

export { CodeBlock };
