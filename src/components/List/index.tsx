import React, { ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
}

export const List: React.FC<ListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};
