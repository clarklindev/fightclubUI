import React, { createContext, useContext, useState } from 'react';

const CodeBlockContext = createContext<{
  preview: string;
  setPreview: (code: string) => void;
}>({
  preview: '',
  setPreview: _ => {},
});

export const useCode = () => {
  return useContext(CodeBlockContext);
};

type CodeBlockProviderProps = {
  children: React.ReactNode | string;
};

export const CodeBlockProvider = ({ children }: CodeBlockProviderProps) => {
  const [preview, setPreview] = useState<string>('');

  return <CodeBlockContext.Provider value={{ preview, setPreview }}>{children}</CodeBlockContext.Provider>;
};
