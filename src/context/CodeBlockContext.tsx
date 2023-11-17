import React, { createContext, useContext, useState } from 'react';

const CodeBlockContext = createContext<{
  code: string;
  setCode: (code: string) => void;
}>({
  code: '',
  setCode: _ => {},
});

export const useCode = () => {
  return useContext(CodeBlockContext);
};

type CodeBlockProviderProps = {
  children: React.ReactNode;
};

export const CodeBlockProvider = ({ children }: CodeBlockProviderProps) => {
  const [code, setCode] = useState('');

  return <CodeBlockContext.Provider value={{ code, setCode }}>{children}</CodeBlockContext.Provider>;
};
