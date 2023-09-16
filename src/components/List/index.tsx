import React, { ReactNode } from 'react';

type ListProps = {
  children: ReactNode;
};

export const List: React.FC<ListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};
