import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

enum Orientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

type SliderProps = {
  onChange: (value: number, index: number) => void;
  value: number;

  orientation?: Orientation | string;
  length?: string;
  offset?: string;
  thickness?: number;
  trackClickable?: boolean;
  min?: number;
  max?: number;
  step?: number;
  index?: number;
  hideTrack?: boolean;
  thumbSize?: number;
  activeColor?: string;
  trackColor?: string;
  className?: string;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

export const Slider: React.FC<SliderProps> = ({
  onChange,
  value = 0,

  orientation = Orientation.HORIZONTAL,
  length = '100%',
  offset = '0px',
  thickness = 6,
  trackClickable = true,
  min = 0,
  max = 100,
  step = 1,
  index = 0,
  hideTrack = false,
  thumbSize = 12,
  activeColor = 'red',
  trackColor = '#FF000055',
  className = index,
}) => {
  const myRef: React.Ref<HTMLDivElement> = useRef(null);

  const [computedHeight, setComputedHeight] = useState('0px');

  useEffect(() => {
    // Access and use the ref
    if (myRef.current !== null) {
      setComputedHeight(myRef.current?.clientHeight + 'px');
    }
  }, []);

  const onChangeHandler = (value: string, index: number) => {
    onChange(parseInt(value), index);
  };

  // const startPercentage = sliderValue; // Adjust this value to set the start point
  // const endPercentage = '80%'; // Adjust this value to set the start point

  //first
  activeColor = `linear-gradient(90deg, ${activeColor} 0%, ${activeColor} ${value}%, ${trackColor} ${value}%, ${trackColor} 100% )`;

  //middle
  // start would be previous' end
  // end would be next's start
  //const activeColor = `linear-gradient(90deg, transparent 0%, transparent ${startPercentage}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;

  //last
  //const activeColor = `linear-gradient(90deg, transparent 0%, transparent ${sliderValue}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;

  return (
    <SliderContainer
      className={['Slider_', className].join(' ')}
      orientation={orientation}
      offset={offset}
      ref={myRef}
      length={length}>
      <SliderInput
        orientation={orientation}
        trackClickable={trackClickable}
        thumbSize={thumbSize}
        thickness={thickness}
        computedHeight={computedHeight}
        trackColor={trackColor}
        activeColor={activeColor}
        min={min}
        max={max}
        step={step}
        value={value}
        hideTrack={hideTrack}
        onChange={event => onChangeHandler(event.target.value, index)}
      />
    </SliderContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const SliderContainer = styled.div<{
  orientation: Orientation | string;
  offset: string;
  ref: React.Ref<any>;
  length: string;
}>`
  box-sizing: border-box;
  position: relative;
  ${({ orientation, offset, length }) =>
    orientation === Orientation.HORIZONTAL &&
    `
    width: ${length ? length : '100%'};
    margin-left: ${offset};
  `};

  ${({ orientation, offset, length }) =>
    orientation === Orientation.VERTICAL &&
    `
    height: ${length ? length : '100%'};
    margin-top: ${offset};
  `};
`;

const SliderInput = styled.input.attrs({
  type: 'range',
})<{
  index?: number;
  orientation: Orientation | string;
  trackClickable: boolean;
  computedHeight: string;
  thickness: number;
  activeColor: string;
  trackColor: string;
  thumbSize: number;
  hideTrack: boolean;
}>`
  position: absolute;

  ${({ orientation, thickness }) =>
    orientation === Orientation.HORIZONTAL &&
    `
    width: 100%;
    height: ${thickness}px;
  `};

  ${({ orientation, thickness, computedHeight }) =>
    orientation === Orientation.VERTICAL &&
    `
  height: ${thickness}px;
  width: ${computedHeight};  //width should now be height of container when vertical - use js to get height of container or use prop's length value 
  transform: rotate(-90deg) translateX(-100%); /* Rotate the scrollbar counterclockwise by 90 degrees */
  transform-origin: top left; /* Set the rotation origin to the top-left corner */
`};

  pointer-events: ${({ trackClickable }) => (trackClickable ? 'auto' : 'none')};
  border-radius: 10px;
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; 

  //slider track
  ${({ hideTrack, activeColor, thickness }) =>
    hideTrack === true
      ? `background:none`
      : `
    &::-moz-range-track{
      background: ${activeColor};
      height: ${thickness}px;
      border-radius: 10px;
    }

    &::-webkit-slider-runnable-track {
      background: ${activeColor};
      height: ${thickness}px;
      border-radius: 10px;
    }
  `};
 

  // slider thumb
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${({ thumbSize }) => thumbSize}px;
    height: ${({ thumbSize }) => thumbSize}px;
    background: #666;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    ${({ thumbSize, thickness }) =>
      `transform: translateY(${
        thickness > thumbSize ? -0.5 * (thumbSize - thickness) : 0.5 * (thickness - thumbSize)
      }px);`};

  &::-moz-range-thumb {
    width: ${({ thumbSize }) => thumbSize}px;
    height: ${({ thumbSize }) => thumbSize}px;
    background: #666;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    ${({ thumbSize, thickness }) =>
      `transform: translateY(${
        thickness > thumbSize ? -0.5 * (thumbSize - thickness) : 0.5 * (thickness - thumbSize)
      }px);`}
`;
