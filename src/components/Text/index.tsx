import React from 'react';
import styled from 'styled-components';

type TextProps = {
  children?: any;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <TextContainer className={className} {...rest}>
      {children}
    </TextContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const TextContainer = styled.p`
  color: ${({ theme }) => theme?.Text?.color};
  margin-bottom: ${({ theme, className }) => {
    const hasMarginBottomClass = className && className.includes('mb-');
    return hasMarginBottomClass ? undefined : theme?.Text?.marginBottom;
  }};
  line-height: 1.7;
`;
