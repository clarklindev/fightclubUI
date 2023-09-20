import React from 'react';
import styled from 'styled-components';

import { Slider } from '../Slider';

//valueGradient
// const startPercentage = sliderValue; // Adjust this value to set the start point
// const endPercentage = '80%'; // Adjust this value to set the start point
//middle
// start would be previous' end
// end would be next's start
//const valueGradient =  `linear-gradient(90deg, transparent 0%, transparent ${startPercentage}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;
//last
//const valueGradient =  `linear-gradient(90deg, transparent 0%, transparent ${sliderValue}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;

type SliderMultiRangeProps = {
  sliderValues: Array<number>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  step?: number;
  min?: number;
  max?: number;
  thumbSize?: number;
  thickness?: number;
  // backgroundColor: string;
  length: string;
};

export const SliderMultiRange: React.FC<SliderMultiRangeProps> = ({
  sliderValues = [0, 0],
  onChange,
  step = 1,
  min = 0,
  max = 100,
  length = '100%',
}) => {
  const restrictBoundaries = (index: number, value: number) => {
    //check if single element in sliderValues || if last element in sliderValues
    let _min: number = sliderValues.length === 1 || index === 0 ? min : sliderValues[index - 1];
    let _max: number = sliderValues.length === 1 || index === sliderValues.length - 1 ? max : sliderValues[index + 1];

    if (value <= _min) {
      value = _min;
    }
    if (value >= _max) {
      value = _max;
    }
    return value;
  };

  //function that gets called everytime one of the sliders value changes
  const onChangeHandler = (value, index = 0) => {
    const restricted = restrictBoundaries(index, parseInt(value));

    let updatedValues = sliderValues.slice();
    updatedValues[index] = restricted;

    onChange(updatedValues);
  };

  return (
    <SliderMultiRangeContainer className="SliderMultiRange" length={length}>
      <SliderWrapper className="SliderWrapper">
        <SliderTrack className="SliderTrack" />
        <Sliders
          className="Sliders"
          offset={parseInt(thumbSize) * (sliderValues.length - 1) + 'px'}
          thumbSize={thumbSize}>
          {(sliderValues || []).map((sliderValue, index) => {
            //cater for the width of scrollbar thumbSize

            return (
              <Slider
                className=""
                key={index}
                value={sliderValue}
                index={index}
                onChange={onChangeHandler}
                step={step}
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

// ------------------------------------------------------------------------------------------------------------------------------------------------

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
