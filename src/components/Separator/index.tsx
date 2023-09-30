import React from 'react';
import styled from 'styled-components';

type SeparatorVariation = 'horizontal' | 'vertical' | 'horizontal-labelled';

type SeparatorProps = {
  variation?: SeparatorVariation;
  width?: string;
  height?: string;
  gap?: string;
  label?: string;
  children?: React.ReactNode;
};

export const Separator: React.FC<SeparatorProps> = ({
  variation = 'horizontal',
  gap = '1rem',
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
  display: flex;
  position: relative;
`;

const SeparatorHorizontal = styled(SeparatorContainer)<{
  height: string;
  width?: string;
  gap?: string;
  children?: React.ReactNode;
}>`
  border-bottom: ${({ children }) => (children ? 'none' : `1px solid var(--border-color)`)};
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  width: 100%;

  span {
    display: flex;
    align-items: center;

    width: ${({ width }) => width || '100%'}; //full width

    height: auto;
    position: relative;
    flex-direction: row;

    &::before,
    &::after {
      flex: 1;
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
  height: string;
  width: string;
  gap: string;
}>`
  width: 0px;
  height: ${({ height }) => `${height}`};
  border-right: 1px solid var(--border-color);
`;
