import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

type CardProps = {
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
};

export const Card: React.FC<CardProps> = ({
  color = 'white',
  borderColor = 'black',
  borderRadius = '10px',
  width = 'auto',
  height = '300px',
  children,
}) => {
  return (
    <CardContainer color={color} borderColor={borderColor} borderRadius={borderRadius} width={width} height={height}>
      {children}
    </CardContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const CardContainer = styled.div<{
  borderColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  theme: DefaultTheme;
}>`
  border: ${({ borderColor, theme }) => (borderColor ? `1px solid ${borderColor}` : `1px solid ${theme.borderColor}`)};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 15px;
`;
