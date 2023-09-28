import React from 'react';
import styled, { keyframes } from 'styled-components';

type SpinnerProps = {
  size?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({ size = '20px' }) => {
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
  border: 2px solid #ccc;
  border-top-color: #333;
  animation: ${spin} 1s linear infinite;
  will-change: border-top-color;

  //always centered in relation to parent
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;
