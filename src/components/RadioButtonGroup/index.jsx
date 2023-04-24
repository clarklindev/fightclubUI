import React from 'react';
import styled from 'styled-components';

const RadioButtonGroupContainer = styled.div`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};

  > *:not(:last-child) {
    margin-bottom: ${({ direction, spacing }) =>
      (direction === 'column' || direction === 'column-reverse') && spacing};
    margin-right: ${({ direction, spacing }) =>
      (direction === 'row' || direction === 'row-reverse') && spacing};
  }
`;

const RadioButtonGroup = ({
  direction = 'column',
  spacing = '0px',
  children,
}) => {
  return (
    <RadioButtonGroupContainer
      className={`RadioButtonGroup`}
      direction={direction}
      spacing={spacing}
    >
      {children}
    </RadioButtonGroupContainer>
  );
};

export default RadioButtonGroup;
