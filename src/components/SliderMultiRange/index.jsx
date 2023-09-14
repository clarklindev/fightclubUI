import React from 'react';
import styled from 'styled-components';

import { Slider } from '../Slider';

const SliderMultiRangeContainer = styled.div`
  height: 30px;
  width: ${({ width }) => width};
`;

const SliderWrapper = styled.div`
  height: 15px;
  position: relative;
`;

const Sliders = styled.div`
  width: ${({ offset }) => `calc(100% - ${offset})`};
  position: absolute;
`;

//this is the background track for all the scrollbars - you want to show this instead of sliders' own track
const SliderTrack = styled.div`
  height: 1px;
  border: 0px;
  border-radius: 0px;
  width: 100%;
  position: absolute;
  top: 7px;
  background-color: currentColor;
`;

export const SliderMultiRange = ({
  sliderValues,
  onChange,
  step = 1,
  min = 0,
  max = 0,
  thumbSize = '16px',
  backgroundColor = 'red',
  width = '100%',
}) => {
  const restrictBoundaries = (index, value) => {
    //min
    let min;
    if (sliderValues.length === 1 || index === 0) {
      min = min;
    } else {
      min = sliderValues[index - 1];
    }

    let max;
    //check if single element in sliderValues || if last element in sliderValues
    if (sliderValues.length === 1 || index === sliderValues.length - 1) {
      max = max;
    } else {
      max = sliderValues[index + 1];
    }

    if (value <= min) {
      value = min;
    }
    if (value >= max) {
      value = max;
    }
    console.log('value: ', value);
    return value;
  };

  //function that gets called everytime one of the sliders value changes
  const onChangeHandler = (value, index = 0) => {
    const restricted = restrictBoundaries(index, parseInt(value));

    let updatedValues = sliderValues.slice();
    updatedValues[index] = restricted;

    onChange(updatedValues);
  };

  //----------------------------------------------------------------------------------
  return (
    <SliderMultiRangeContainer className="SliderMultiRange" width={width}>
      <SliderWrapper className="SliderWrapper">
        <SliderTrack className="SliderTrack" thumbSize={thumbSize} />
        <Sliders
          className="Sliders"
          offset={parseInt(thumbSize) * (sliderValues.length - 1) + 'px'}>
          {(sliderValues || []).map((sliderValue, index) => {
            //cater for the width of scrollbar thumbSize

            return (
              <Slider
                className=""
                key={index}
                savedData={sliderValue}
                step={step}
                index={index}
                onChange={onChangeHandler}
                min={min}
                max={max}
                offset={parseInt(thumbSize) * index + 'px'}
                //x position to place the <Slider/> you cant see this of each individual slider if <Slider className="absolute">. only when className = "" and hideTrack="false"
                trackClickable={false} //you want to leave this FALSE for multirange input
                hideTrack={true} //you want to leave this as TRUE for multirange input - <SliderTrack /> replaces this
                thumbSize={thumbSize}
              />
            );
          })}
        </Sliders>
      </SliderWrapper>
    </SliderMultiRangeContainer>
  );
};
