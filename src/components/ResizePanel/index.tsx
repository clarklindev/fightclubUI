import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
// import { Dimensions } from '../Dimensions';

type ResizePanelProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
};

export const ResizePanel: React.FC<ResizePanelProps> = ({ style, children, className }) => {
  const [resizing, setResizing] = useState(false);
  const [width, setWidth] = useState<number | undefined>(); // Initial width
  const [maxWidth, setMaxWidth] = useState<number | undefined>();
  const initialX = useRef<number | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const childComponentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentRef?.current) {
      setWidth(componentRef.current.clientWidth);
      setMaxWidth(componentRef.current.clientWidth);
    }

    // Handle window resize event
    const handleResize = () => {
      const parentNode = componentRef?.current?.parentNode as HTMLElement;
      if (parentNode) {
        //this needs to be here for resize
        const maxWidth = parentNode.clientWidth;
        const computedStyles = getComputedStyle(parentNode);
        const paddingLeft = parseFloat(computedStyles.paddingLeft);
        const paddingRight = parseFloat(computedStyles.paddingRight);
        const newMax = maxWidth - paddingLeft - paddingRight;
        setMaxWidth(newMax);
        setWidth(newMax);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setResizing(true);
    initialX.current = e.clientX;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (resizing && componentRef.current && maxWidth && childComponentsRef.current) {
      const deltaX = (initialX?.current ?? 0) - e.clientX;
      setWidth(prev => (prev === null || prev === undefined ? 0 : Math.max(300, Math.min(prev - deltaX, maxWidth))));
      initialX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (resizing) {
      setResizing(false);
    }
  };

  React.useEffect(() => {
    if (resizing) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizing]);

  return (
    <ResizePanelWrapper style={{ width }} ref={componentRef}>
      {/* <Dimensions value={width && width > 0 ? width : 0} /> */}
      <Handle onMouseDown={handleMouseDown} />
      <div className={className} ref={childComponentsRef}>
        {children}
      </div>
    </ResizePanelWrapper>
  );
};
// ------------------------------------------------------------------------------------------------------------------------------------------------

const ResizePanelWrapper = styled.div<{ style: React.CSSProperties }>`
  width: ${({ style }) => `${style.width}px`};
  padding: 2rem;
  height: 100%;
  background: white;
  border: var(--border);
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
`;

const Handle = styled.span`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(255, 0, 0, 0.8);
  cursor: ew-resize;

  &:after {
    content: '';
    right: -10px;
    position: absolute;
    height: 30px;
    width: 5px;
    border-radius: 5px;
    background: hsla(200, 0%, 0%, 0.4);
  }
`;
