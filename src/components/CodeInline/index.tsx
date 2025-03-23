import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {vscodeLight, vscodeDark} from '@uiw/codemirror-theme-vscode';
import { useTheme } from '@fightclub/context/ThemeContext';

interface CodeBlockProps {
  readOnly?: boolean;
  editable?: boolean;
  lineNumbers?:boolean; //https://github.com/uiwjs/react-codemirror/issues/316
  value?: string;
}

const CodeInline = ({ value, lineNumbers=false }: CodeBlockProps) => {
  const {colorScheme, checkIsDark} = useTheme();

  return (
    <>
      <br/>
      <CodeMirror extensions={[javascript({ jsx: true })]} basicSetup={{lineNumbers:lineNumbers, foldGutter:false, highlightActiveLine:false}} theme={checkIsDark(colorScheme!)? vscodeDark : vscodeDark} value={value}/>
      <br/>
    </>
  );
};

export { CodeInline };
