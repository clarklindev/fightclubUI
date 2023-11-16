import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

import { Controlled as CodeMirror } from 'react-codemirror2';

import { useTheme } from '@swagfinger/context/ThemeContext';

export const CodeBlock = ({ language = 'tsx', value, onChange }) => {
  const handleChange = (editor, data, value): void => {
    onChange(value);
  };

  return (
    <CodeMirror
      onBeforeChange={handleChange}
      value={value}
      className="code-mirror-wrapper"
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        lineNumbers: true,
        theme: 'material',
      }}
    />
  );
};
