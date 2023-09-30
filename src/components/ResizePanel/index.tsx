import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
// import { Dimensions } from '../Dimensions';

type ResizePanelProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  minWidth?: string;
};

export const ResizePanel: React.FC<ResizePanelProps> = ({ style, children, className }) => {
  const [resizing, setResizing] = useState(false);
  const [width, setWidth] = useState<number | undefined>(); // Initial width
  const [maxWidth, setMaxWidth] = useState<number | undefined>();

  const initialX = useRef<number | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const childComponentsRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

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
    if (resizing && maxWidth) {
      const deltaX = (initialX?.current ?? 0) - e.clientX;
      setWidth(prev => (prev === null || prev === undefined ? 0 : Math.min(prev - deltaX, maxWidth)));
      initialX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (resizing) {
      setResizing(false);
    }
  };

  //touch
  const handleTouchStart = (e: React.TouchEvent) => {
    setResizing(true);
    initialX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (resizing && maxWidth) {
      const deltaX = (initialX?.current ?? 0) - e.touches[0].clientX;
      setWidth(prev => (prev === null || prev === undefined ? 0 : Math.min(prev - deltaX, maxWidth)));
      initialX.current = e.touches[0].clientX;
    }
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (resizing) {
      setResizing(false);
    }
  };

  const handleTouchCancel = () => {
    if (resizing) {
      setResizing(false);
    }
  };

  const cleanupListeners = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('touchend', handleTouchEnd);
    window.removeEventListener('touchcancel', handleTouchCancel);
    window.removeEventListener('touchmove', handleTouchMove);
  };

  React.useEffect(() => {
    if (resizing) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('touchcancel', handleTouchCancel);
      window.addEventListener('touchmove', handleTouchMove);
    } else {
      cleanupListeners();
    }

    return () => {
      // Cleanup event listeners when the component unmounts
      cleanupListeners();
    };
  }, [resizing]);

  return (
    // width passed here is the state
    <ResizePanelWrapper className="ResizePanelWrapper" style={{ ...style, width }} ref={componentRef}>
      {/* <Dimensions value={width && width > 0 , padding? width : 0} /> */}
      <Handle onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} ref={handleRef} />
      <ChildContainer className={className} ref={childComponentsRef} style={{ ...style }}>
        {children}
      </ChildContainer>
    </ResizePanelWrapper>
  );
};
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Styled-component warning: for frequently used attributes, use this syntax:
// Example: styled.div.attrs(props => ({}))``
const ResizePanelWrapper = styled.div.attrs<{ style: React.CSSProperties }>(props => ({
  style: {
    width: props?.style?.width,
    height: props?.style?.height || 'auto',
    padding: props?.style?.padding || '2rem',
    minWidth: props?.style?.minWidth || 'min-content',
  },
}))`
  background: white;
  border: var(--border);
  border-radius: 4px;
  position: relative;
  max-width: 100%;
  min-height: 50px;
`;

const ChildContainer = styled.div<{ style: React.CSSProperties }>`
  gap: 1rem;
  position: relative;
  flex-direction: column;
  overflow: visible;

  // center content in resizePanel
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const Handle = styled.span`
  top: 50%;
  right: 0;
  cursor: ew-resize;
  position: absolute;

  &::after {
    top: 50%;
    transform: translateY(-50%);
    content: '';
    right: -10px;
    position: absolute;
    height: 2rem;
    width: 5px;
    border-radius: 5px;
    background: hsla(200, 0%, 0%, 0.3);
  }

  // increase size of touch target
  &::before {
    background: transparent;
    content: '';
    position: absolute;
    top: -20px;
    bottom: -20px;
    left: 0px;
    right: -20px;
  }
`;
