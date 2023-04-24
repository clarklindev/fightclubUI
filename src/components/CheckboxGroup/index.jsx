import React from 'react';
import styled from 'styled-components';

const CheckboxGroupContainer = styled.div`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};

  > *:not(:last-child) {
    margin-bottom: ${({ direction, spacing }) =>
      (direction === 'column' || direction === 'column-reverse') && spacing};
    margin-right: ${({ direction, spacing }) =>
      (direction === 'row' || direction === 'row-reverse') && spacing};
  }
`;

const CheckboxGroup = ({ direction = 'column', spacing = '0px', children }) => {
  return (
    <CheckboxGroupContainer
      className={`CheckboxGroup`}
      direction={direction}
      spacing={spacing}
    >
      {children}
    </CheckboxGroupContainer>
  );
};

export default CheckboxGroup;
