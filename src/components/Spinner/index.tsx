import React from 'react';
import styled, { keyframes } from 'styled-components';

type SpinnerProps = {
  size?: string;
};

export const Spinner = ({ size = '15px' }: SpinnerProps) => {
  return <SpinnerContainer size={size} />;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div<SpinnerProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  border: 1px solid #ccc;
  border-top-color: #333;
  animation: ${spin} 0.3s linear infinite;
  will-change: border-top-color;
`;
