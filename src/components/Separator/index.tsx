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
  height,
  width,
  children = undefined,
}: SeparatorProps) => {
  const separatorRef = useRef<HTMLDivElement | null>(null);
  let parentRef;

  useEffect(() => {
    if (separatorRef?.current?.parentNode) {
      parentRef = separatorRef?.current?.parentNode.parentNode;
      console.log('parentRef: ', parentRef);

      //we are trying to ensure the <span> element is the size of container without the padding..

      //      const passedInHeight = parseInt(`${height || 0}px`); //if height not passedin, use 0

      //      check which is bigger use that..., passedin prop height(if not available use 0 as value)
      //      check the passedInHeight value against parent height, whichever is bigger, use that.
      //      const useHeight = Math.max(firstCheck, parseInt(`${parent?.clientHeight}px`));
      //      setUseHeight(`${useHeight}px`);
    }
  }, [separatorRef.current]);

  switch (variation) {
    case 'horizontal':
      return (
        <SeparatorHorizontal className="Separator" height={height} width={width} gap={gap}>
          {children && <span>{children}</span>}
        </SeparatorHorizontal>
      );

    case 'vertical':
      return (
        <SeparatorVertical className="Separator" ref={separatorRef} height={height} width={width} gap={gap}>
          {children && <span>{children}</span>}
        </SeparatorVertical>
      );

    default:
      return null;
  }
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const SeparatorHorizontal = styled.div<{
  className?: string;
  height?: string;
  width?: string;
  gap?: string;
  children?: React.ReactNode;
}>`
  border-bottom: ${({ children }) => (children ? 'none' : `1px solid var(--border-color)`)};
  height: 0px;
  width: 100%;

  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;

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

const SeparatorVertical = styled.div<{
  className?: string;
  height?: string;
  width?: string;
  gap?: string;
  children?: React.ReactNode;
}>`
  border-right: ${({ children }) => (children ? 'none' : `1px solid var(--border-color)`)};
  height: 100%;
  width: 0px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;

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
    position: relative;
    width: 20px;
    background: rgba(255, 0, 0, 0.1);

    &::before,
    &::after {
      align-self: center;
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
