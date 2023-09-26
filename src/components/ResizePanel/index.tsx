import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Dimensions } from '../Dimensions';

type ResizePanelWrapperProps = {
  width?: number | null;
};

export const ResizePanel: React.FC = () => {
  const [resizing, setResizing] = useState(false);
  const [width, setWidth] = useState<number | null>(); // Initial width
  const [maxWidth, setMaxWidth] = useState<number | undefined>();
  const initialX = useRef<number | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (componentRef?.current) {
      setWidth(componentRef.current.clientWidth);
      setMaxWidth(componentRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    // Handle window resize event
    const handleResize = () => {
      if (componentRef?.current) {
        const parentElement = componentRef.current.parentNode as HTMLElement;

        const maxWidth = parentElement.clientWidth;
        const computedStyles = getComputedStyle(parentElement);
        const paddingLeft = parseFloat(computedStyles.paddingLeft);
        const paddingRight = parseFloat(computedStyles.paddingRight);
        const newMax = maxWidth - paddingLeft - paddingRight;
        setMaxWidth(newMax);
        setWidth(Math.min(componentRef.current.offsetWidth, newMax));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [componentRef?.current?.parentNode]);

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log('press down');
    e.preventDefault();
    setResizing(true);
    initialX.current = e.clientX;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (resizing && maxWidth) {
      console.log('maxWidth: ', maxWidth);
      const deltaX = (initialX?.current ?? 0) - e.clientX;
      setWidth(prev => (prev === null || prev === undefined ? 0 : Math.max(0, Math.min(prev - deltaX, maxWidth))));
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
    <ResizePanelWrapper width={width} ref={componentRef}>
      <Dimensions value={width && width > 0 ? width : 0} />
      <Handle onMouseDown={handleMouseDown} />
    </ResizePanelWrapper>
  );
};
// ------------------------------------------------------------------------------------------------------------------------------------------------

const ResizePanelWrapper = styled.div<ResizePanelWrapperProps>`
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  height: 100%;
  background: white;
  border: var(--border);
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 100%;
`;

const Handle = styled.span`
  align-self: center;
  position: absolute;
  right: 0;
  background: rgba(255, 0, 0, 0.8);
  cursor: ew-resize;

  &:after {
    content: '';
    right: -10px;
    position: absolute;
    display: flex;
    align-self: center;
    justify-self: end;
    height: 30px;
    width: 5px;
    border-radius: 5px;
    background: hsla(200, 0%, 0%, 0.5);
  }
`;
