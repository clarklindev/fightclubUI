import React from 'react';
import styled from 'styled-components';

export const Card = ({
  color = 'white',
  borderColor = 'black',
  borderRadius = '10px',
  width = '250px',
  height = '300px',
  children,
}) => {
  return (
    <CardContainer
      color={color}
      borderColor={borderColor}
      borderRadius={borderRadius}
      width={width}
      height={height}>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: ${({ borderColor, theme }) =>
    borderColor
      ? `1px solid ${borderColor}`
      : `1px solid ${theme.borderColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 15px;
`;
