import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface CodeBlockProps {
  readOnly?: boolean;
  editable?: boolean;
  value?: string;
}

const CodeInline = ({ value=''}: CodeBlockProps) => {

  return (
    <CodeMirror extensions={[javascript({ jsx: true })]} value={value}/>
  );
};

export { CodeInline };
