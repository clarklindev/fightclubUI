import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

type DividerVariation = 'horizontal' | 'vertical' | 'inline-vertical';

type DividerProps = {
  variation?: DividerVariation;
  gap?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
};

export const Divider: React.FC<DividerProps> = ({
  variation = 'horizontal',
  height,
  width,
  padding,
  margin,
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
        <DividerHorizontal
          className="Divider"
          height={height}
          width={width}
          padding={padding}
          margin={margin}
          gap={gap}>
          {children && <span>{children}</span>}
        </DividerHorizontal>
      );

    case 'inline-vertical':
      return <span className="bg-white mx-3 border-r-2" />;

    case 'vertical':
      return (
        <DividerVertical className="Divider" ref={dividerRef} height={height} width={width} margin={margin} gap={gap}>
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
  margin?: string;
  padding?: string;
  gap?: string;
  children?: React.ReactNode;
}>`
  border-bottom: ${({ children }) => (children ? 'none' : `1px solid var(--border-color)`)};
  width: 100%;
  margin: ${({ children, margin = '10px 0' }) => (children ? '0' : margin)};

  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  flex-direction: row;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: ${({ margin = '10px 0' }) => margin};
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
  margin?: string;
  children?: React.ReactNode;
}>`
  height: ${({ height = '100%' }) => height};
  min-height: 1rem;
  position: relative;
  display: inline-flex;

  ${({ children, height = '100%', margin = '0 10px', gap = '0.2rem' }) =>
    children
      ? `
      border-right: none;
      
      span {
        display: inline-flex;
        flex-direction: column;
        
        margin: ${margin};
    
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
  width: 0px;
  margin: 0 10px;
  `};
`;
