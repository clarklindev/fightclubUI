import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.p`
  color: ${({ theme }) => theme?.Text?.marginBottom};
  margin-bottom: ${({ theme }) => theme?.Text?.marginBottom};
`;

export const Text = ({ children, ...rest }) => {
  return <TextContainer {...rest}>{children}</TextContainer>;
};
