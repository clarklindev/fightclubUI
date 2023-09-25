import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Dimensions } from '../Dimensions';

export const ResizePanel: React.FC = () => {
  const [resizing, setResizing] = useState(false);
  const [width, setWidth] = useState(); // Initial width
  const [maxWidth, setMaxWidth] = useState();
  const initialX = useRef(null);
  const componentRef = useRef(null);

  useEffect(() => {
    if (componentRef && componentRef.current !== null) {
      setWidth(componentRef.current.clientWidth);

      const computedStyles = getComputedStyle(componentRef.current.parentNode);
      const paddingLeft = parseFloat(computedStyles.paddingLeft);
      const paddingRight = parseFloat(computedStyles.paddingRight);
      setMaxWidth(componentRef.current.parentNode.clientWidth - paddingLeft - paddingRight);
    }
  }, []);

  useEffect(() => {
    // Handle window resize event
    const handleResize = () => {
      const maxWidth = componentRef.current.parentNode.clientWidth;
      console.log('parent clientWidth:', maxWidth);

      const computedStyles = getComputedStyle(componentRef.current.parentNode);
      const paddingLeft = parseFloat(computedStyles.paddingLeft);
      const paddingRight = parseFloat(computedStyles.paddingRight);
      const newMax = maxWidth - paddingLeft - paddingRight;
      console.log('newMax clientWidth:', newMax);

      setMaxWidth(newMax);
      setWidth(newMax);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [componentRef?.current?.parentNode.clientWidth]);

  const handleMouseDown = e => {
    console.log('press down');
    e.preventDefault();
    setResizing(true);
    initialX.current = e.clientX;
  };

  const handleMouseMove = e => {
    if (resizing) {
      console.log('maxWidth: ', maxWidth);
      const computedStyles = getComputedStyle(componentRef.current.parentNode);
      const paddingLeft = parseFloat(computedStyles.paddingLeft);
      const paddingRight = parseFloat(computedStyles.paddingRight);
      const newMax = maxWidth - paddingLeft - paddingRight;

      const deltaX = initialX.current - e.clientX;
      setWidth(prev => Math.max(0, Math.min(prev - deltaX, maxWidth)));
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
      <Dimensions value={width > 0 ? width : 0} />
      <Handle onMouseDown={handleMouseDown} />
    </ResizePanelWrapper>
  );
};
// ------------------------------------------------------------------------------------------------------------------------------------------------

const ResizePanelWrapper = styled.div.attrs(props => ({
  style: {
    width: `${props.width}px` /* Apply the width from props */,
  },
}))`
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
