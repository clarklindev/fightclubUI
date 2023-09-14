import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size?: string;
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div<SpinnerProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #333;
  animation: ${spin} 1s linear infinite;
  will-change: border-top-color;
`;

export const Spinner: React.FC<SpinnerProps> = ({ size = '30px' }) => {
  return <SpinnerContainer size={size} />;
};
