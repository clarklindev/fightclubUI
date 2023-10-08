//import React, { useState, useRef, useEffect } from 'react';
//import styled from 'styled-components';
//import { Dimensions } from '../Dimensions';

type ResizePanelProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  minWidth?: string;
};

export const ResizePanel = (props: ResizePanelProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

// export const ResizePanel: React.FC<ResizePanelProps> = ({ style, children, className }) => {
//   const componentRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const handleRef = useRef<HTMLDivElement>(null);
//   const initialX = useRef<number | null>(null);

//   const [resizing, setResizing] = useState(false);

//   const [width, setWidth] = useState<number | undefined>(); // Initial width
//   const [maxWidth, setMaxWidth] = useState<number | undefined>();
//   const [height, setHeight] = useState<number | undefined>(); // Initial height
//   const [maxHeight, setMaxHeight] = useState<number | undefined>();
//   const [allowedHeight, setAllowedHeight] = useState<number | undefined>();

//   useEffect(() => {
//     //set initial width
//     if (componentRef.current) {
//       setWidth(componentRef.current.clientWidth);
//       setMaxWidth(componentRef.current.clientWidth);
//     }

//     // Handle window resize event
//     const handleResize = async () => {
//       const parentNode = componentRef?.current?.parentNode as HTMLElement;
//       //this needs to be here for resize
//       if (parentNode) {
//         const maxWidth = parentNode.clientWidth; //full parent width including padding
//         const maxHeight = parentNode.clientHeight;

//         const computedParent = getComputedStyle(parentNode);
//         const paddingLeft = parseFloat(computedParent.paddingLeft);
//         const paddingRight = parseFloat(computedParent.paddingRight);
//         const paddingTop = parseFloat(computedParent.paddingTop);
//         const paddingBottom = parseFloat(computedParent.paddingBottom);

//         const newMaxWidth = maxWidth - paddingLeft - paddingRight;
//         const newMaxHeight = maxHeight - paddingTop - paddingBottom;

//         setMaxWidth(newMaxWidth);
//         setWidth(newMaxWidth);
//       }

//       if (containerRef.current && maxHeight) {
//         const rect = await containerRef.current.getBoundingClientRect();
//         const containerY = rect.top;
//         console.log('containerY: ', containerY);
//         const calcHeight = maxHeight - containerY;
//         setAllowedHeight(calcHeight);
//       }
//     };

//     //resizing the browser windows
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
//     e.preventDefault();
//     setResizing(true);
//     initialX.current = e.clientX;
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (resizing && maxWidth) {
//       const deltaX = (initialX?.current ?? 0) - e.clientX;
//       setWidth(prev => (prev === null || prev === undefined ? 0 : Math.min(prev - deltaX, maxWidth)));
//       initialX.current = e.clientX;
//     }
//   };

//   const handleMouseUp = () => {
//     disableResizing();
//   };

//   //touch
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setResizing(true);
//     initialX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e: TouchEvent) => {
//     if (resizing && maxWidth) {
//       const deltaX = (initialX?.current ?? 0) - e.touches[0].clientX;
//       setWidth(prev => (prev === null || prev === undefined ? 0 : Math.min(prev - deltaX, maxWidth)));
//       initialX.current = e.touches[0].clientX;
//     }
//     e.preventDefault();
//   };

//   const handleTouchEnd = () => {
//     disableResizing();
//   };

//   const handleTouchCancel = () => {
//     disableResizing();
//   };

//   const disableResizing = () => {
//     if (resizing) {
//       setResizing(false);
//     }
//   };

//   const cleanupListeners = () => {
//     window.removeEventListener('mousemove', handleMouseMove);
//     window.removeEventListener('mouseup', handleMouseUp);
//     window.removeEventListener('touchend', handleTouchEnd);
//     window.removeEventListener('touchcancel', handleTouchCancel);
//     window.removeEventListener('touchmove', handleTouchMove);
//   };

//   React.useEffect(() => {
//     if (resizing) {
//       window.addEventListener('mouseup', handleMouseUp);
//       window.addEventListener('mousemove', handleMouseMove);
//       window.addEventListener('touchend', handleTouchEnd);
//       window.addEventListener('touchcancel', handleTouchCancel);
//       window.addEventListener('touchmove', handleTouchMove);
//     } else {
//       cleanupListeners();
//     }

//     return () => {
//       // Cleanup event listeners when the component unmounts
//       cleanupListeners();
//     };
//   }, [resizing]);

//   return (
//     // width - passed here to style={{width}} is state "width"
//     // <ResizePanelWrapper className="ResizePanelWrapper" style={{ ...style, width }} ref={componentRef}>
//     <ResizePanelWrapper>
//       {/* <Dimensions value={`${width}px`} />
//       <Handle onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} ref={handleRef} />
//       <ChildContainer className={className} ref={containerRef}> */}
//       {children}
//       {/* </ChildContainer>*/}
//     </ResizePanelWrapper>
//   );
// };
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Styled-component warning: for frequently used attributes, use this syntax:
// Example: styled.div.attrs(props => ({}))``
// const ResizePanelWrapper = styled.div.attrs<{ style: React.CSSProperties }>(props => ({
//   style: {
//     width: props?.style?.width,
//     height: props?.style?.height || 'auto',
//     padding: props?.style?.padding || '2rem',
//     minWidth: props?.style?.minWidth || '100%',
//     minHeight: props?.style?.minHeight || '50px',
//   },
// }))`
//   background: rgba(255, 0, 0, 0.1);
//   border: var(--border);
//   border-radius: 4px;
//   position: relative;
//   max-width: 100%;
// `;

// const ChildContainer = styled.div`
//   gap: 1rem;
//   position: relative;
//   flex-direction: column;
//   background: rgba(0, 255, 255, 0.4);

//   // center content in resizePanel
//   // display: flex;
//   // align-items: center;
//   // justify-content: center;
// `;

// const Handle = styled.span`
//   top: 50%;
//   right: 0;
//   cursor: ew-resize;
//   position: absolute;

//   &::after {
//     top: 50%;
//     transform: translateY(-50%);
//     content: '';
//     right: -10px;
//     position: absolute;
//     height: 2rem;
//     width: 5px;
//     border-radius: 5px;
//     background: hsla(200, 0%, 0%, 0.3);
//   }

//   // increase size of touch target
//   &::before {
//     background: transparent;
//     content: '';
//     position: absolute;
//     top: -20px;
//     bottom: -20px;
//     left: 0px;
//     right: -20px;
//   }
// `;
