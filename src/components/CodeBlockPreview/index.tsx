import { useEffect, useState } from 'react';
import JsxParser from 'react-jsx-parser';

import { useCode } from '@swagfinger/context/CodeBlockContext';
import * as ReactComponents from '@swagfinger/components';

export const CodeBlockPreview = () => {
  const [internalCode, setInternalCode] = useState<string>('');
  const { code } = useCode();

  useEffect(() => {
    if (code) {
      setInternalCode(code);
    }
  }, [code]);

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
