import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  box-sizing: border-box;
  width: ${({ width }) => width};
  margin-left: ${({ offset }) => offset};
`;

const SliderWrapper = styled.div`
  width: 100%;
  background: red;
  position: relative;
`;

//you want to show teh SliderTrack if there is only one slider
const SliderTrack = styled.div`
  border-radius: 0px;
  height: 2px;
  width: 100%;
  top: 8px;
  position: absolute;
  display: ${({ hideTrack }) => (hideTrack ? 'none' : 'block')};
  background-color: rgba(0, 0, 0, 0.2);
`;

const SliderColor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  > div {
    background-color: pink;
  }
`;

const SliderInput = styled.input.attrs(({ index }) => ({
  index: index,
  type: 'range',
}))`
  /* Add styles for the input element */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  pointer-events: ${({ trackClickable }) => (trackClickable ? 'auto' : 'none')};
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 2px;
  outline: none;
  background: transparent; //the actual clickable part of scrolltrack
  display: flex;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${({ thumbSize }) => thumbSize};
    height: ${({ thumbSize }) => thumbSize};
    background: #666;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: ${({ thumbSize }) => thumbSize};
    height: ${({ thumbSize }) => thumbSize};
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
  }
  &::-ms-thumb {
    appearance: none;
    width: ${({ thumbSize }) => thumbSize};
    height: ${({ thumbSize }) => thumbSize};
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
  }
`;

const Slider = ({
  width = '100%',
  hideTrack = false,
  trackClickable = true,
  min = 0,
  max = 100,
  step = 1,
  index = 0,
  thumbSize = '16px',
  backgroundColor,
  savedData = 0,
  offset = 0,
  onChange,
  className,
}) => {
  const [sliderValue, setSliderValue] = useState();
  useEffect(() => {
    setSliderValue(savedData);
  }, []);

  const onChangeHandler = (value, index) => {
    onChange(value, index);
    setSliderValue(value);
  };

  return (
    <SliderContainer
      width={width}
      offset={offset}
      className={['Slider', className].join(' ')}
    >
      <SliderWrapper>
        <SliderTrack hideTrack={hideTrack} backgroundColor={backgroundColor} />
        <SliderColor color='red' splitPosition={sliderValue}>
          <div />
          <div />
        </SliderColor>
        <SliderInput
          type='range'
          trackClickable={trackClickable}
          min={min}
          max={max}
          step={step}
          thumbSize={thumbSize}
          value={savedData}
          onChange={(event) => onChangeHandler(event.target.value, index)}
        />
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
