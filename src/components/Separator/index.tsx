import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

type SeparatorVariation = 'horizontal' | 'vertical';

type SeparatorProps = {
  variation?: SeparatorVariation;
  width?: string;
  height?: string;
  gap?: string;
  children?: React.ReactNode;
};

export const Separator: React.FC<SeparatorProps> = ({
  variation = 'horizontal',
  gap = variation === 'horizontal' ? '1rem' : '0px',
  height = 'inherit',
  width = 'inherit',
  children = undefined,
}: SeparatorProps) => {
  switch (variation) {
    case 'horizontal':
      return (
        <SeparatorHorizontal className="Separator" height={height} width={width} gap={gap}>
          {children && <span>{children}</span>}
        </SeparatorHorizontal>
      );

    case 'vertical':
      return (
        <SeparatorVertical className="Separator" height={height} width={width} gap={gap}>
          {children && <span>{children}</span>}
        </SeparatorVertical>
      );

    default:
      return null;
  }
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const SeparatorContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
`;

const SeparatorHorizontal = styled(SeparatorContainer)<{
  className?: string;
  height?: string;
  width?: string;
  gap?: string;
  children?: React.ReactNode;
}>`
  border-bottom: ${({ children }) => (children ? 'none' : `1px solid var(--border-color)`)};
  flex-direction: row;
  height: 0px;
  width: 100%;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${({ width }) => width || '100%'}; //full width
    height: auto;
    position: relative;
    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 0px;
      border-bottom: 1px solid var(--border-color);
    }
    &::before {
      margin-right: ${({ gap }) => gap};
    }
    &::after {
      margin-left: ${({ gap }) => gap};
    }
  }
`;

const SeparatorVertical = styled(SeparatorContainer)<{
  className?: string;
  height?: string;
  width?: string;
  gap?: string;
  children?: React.ReactNode;
}>`
  border-right: ${({ children }) => (children ? 'none' : `1px solid var(--border-color)`)};
  flex-direction: column;
  width: 0px;
  height: ${({ height }) => height};
  align-items: center;

  ${({ children }) =>
    children
      ? `
      min-height: 1rem;
      `
      : `
      min-height: 2rem;
      `};

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10px;
    height: ${({ height }) => height};
    position: relative;

    &::before,
    &::after {
      width: 0px;
      height: 100%;
      content: '';
      border-right: 1px solid var(--border-color);
    }

    &::before {
      min-height: 5px;
      margin-bottom: ${({ gap }) => gap};
    }
    &::after {
      min-height: 5px;
      margin-top: ${({ gap }) => gap};
    }
  }
`;
