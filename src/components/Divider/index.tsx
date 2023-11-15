import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

type DividerVariation = 'horizontal' | 'vertical';

type DividerProps = {
  variation?: DividerVariation;
  width?: string;
  gap?: string;
  height?: string;
  padding?: string;
  children?: React.ReactNode;
};

export const Divider: React.FC<DividerProps> = ({
  variation = 'horizontal',
  height,
  width,
  padding,
  gap,
  children = undefined,
}: DividerProps) => {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  let parentRef;

  useEffect(() => {
    if (dividerRef?.current?.parentNode) {
      parentRef = dividerRef?.current?.parentNode.parentNode;
      console.log('parentRef: ', parentRef);

      //we are trying to ensure the <span> element is the size of container without the padding..

      //      const passedInHeight = parseInt(`${height || 0}px`); //if height not passedin, use 0

      //      check which is bigger use that..., passedin prop height(if not available use 0 as value)
      //      check the passedInHeight value against parent height, whichever is bigger, use that.
      //      const useHeight = Math.max(firstCheck, parseInt(`${parent?.clientHeight}px`));
      //      setUseHeight(`${useHeight}px`);
    }
  }, [dividerRef.current]);

  switch (variation) {
    case 'horizontal':
      return (
        <DividerHorizontal className="Divider" height={height} width={width} padding={padding} gap={gap}>
          {children && <span>{children}</span>}
        </DividerHorizontal>
      );

    case 'vertical':
      return (
        <DividerVertical className="Divider" ref={dividerRef} height={height} width={width} padding={padding} gap={gap}>
          {children && <span>{children}</span>}
        </DividerVertical>
      );

    default:
      return null;
  }
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const DividerHorizontal = styled.div<{
  className?: string;
  height?: string;
  width?: string;
  padding?: string;
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
    padding: ${({ padding }) => padding};
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
      margin-right: ${({ gap = '1rem' }) => gap};
    }
    &::after {
      margin-left: ${({ gap = '1rem' }) => gap};
    }
  }
`;

const DividerVertical = styled.div<{
  className?: string;
  height?: string;
  width?: string;
  gap?: string;
  padding?: string;
  children?: React.ReactNode;
}>`
  height: ${({ height = 'auto' }) => height};
  min-height: 1rem;

  ${({ children, height, padding = '0 1rem', gap = '0.2rem' }) =>
    children
      ? `
      padding: ${padding};

      border-right: none;
      span {
        display: flex;
        flex-direction: column;
        align-items: center;
    
        position: relative;
        width: 20px;
        overflow-wrap: normal;
    
        &::before,
        &::after {
          align-self: center;
          height: ${height};
          min-height: 5px;
          content: '';
          border-right: 1px solid var(--border-color);
        }

        &::before {
          margin-bottom: ${gap};
        }
        &::after {
          margin-top: ${gap};
        }
      }
      `
      : `
  
  border-right: 1px solid var(--border-color);
  height: ${height};
  width: 0px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px;
  `};
`;
