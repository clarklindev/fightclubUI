import React from 'react';
import styled from 'styled-components';

export type IconProps = {
  size?: string;
  fill?: string;
  stroke?: string;
  fillOpacity?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  stroke = 'currentColor',
  children,
  size = '25px',
  fill = undefined,
  fillOpacity,
  ...rest
}) => {
  return (
    <IconContainer className="Icon" size={size} stroke={stroke} fill={fill} fillOpacity={fillOpacity} {...rest}>
      {children}
    </IconContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const IconContainer = styled.div<
  Omit<IconProps, 'children'> & {
    size: string;
    stroke?: string;
    fill?: string;
    fillOpacity?: string;
  }
>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  > * {
    width: 100%;
    height: 100%;
  }

  > svg {
    stroke: ${({ stroke }) => stroke};
    fill: ${({ fill }) => fill};
    fill-opacity: ${({ fillOpacity }) => fillOpacity};
  }
`;
