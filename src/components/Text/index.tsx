import React from 'react';
import styled from 'styled-components';

type TextProps = {
  children?: any;
  className?: string;
};

const Text = ({ children, className, ...rest }: TextProps) => {
  return (
    <TextContainer className={className} {...rest}>
      {children}
    </TextContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------
//if there is no prop that starts with mb- ...
const TextContainer = styled.p`
  color: ${({ theme }) => theme?.Text?.color};
  margin-bottom: ${({ theme, className }) => {
    const hasMarginBottomClass = className && (className.includes('mb-') || className.includes('my-'));
    return hasMarginBottomClass ? undefined : theme?.Text?.marginBottom;
  }};
  line-height: 1.7rem;
`;

Text.displayName = 'Text';
export { Text };
