import React from 'react';
import styled from 'styled-components';

type CheckboxGroupProps = {
  direction: string;
  spacing: string;
  children: React.ReactNode;
};

export const CheckboxGroup = ({ direction = 'column', spacing = '0px', children }: CheckboxGroupProps) => {
  return (
    <CheckboxGroupContainer className={`CheckboxGroup`} direction={direction} spacing={spacing}>
      {children}
    </CheckboxGroupContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const CheckboxGroupContainer = styled.div<{
  direction: string;
  spacing: string;
}>`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};

  > *:not(:last-child) {
    margin-bottom: ${({ direction, spacing }) => (direction === 'column' || direction === 'column-reverse') && spacing};
    margin-right: ${({ direction, spacing }) => (direction === 'row' || direction === 'row-reverse') && spacing};
  }
`;
