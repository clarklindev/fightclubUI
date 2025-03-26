import React, { useState, useRef, memo, useEffect } from 'react';
import { Slider } from '@fightclub/components';
import { Orientation } from '@fightclub/types/Orientation';
import { debounce } from 'lodash';

enum SlideMode {
  RESTRICT = 'restrict',
  MAGNETIC = 'magnetic',
  SLIDETHROUGH = 'slidethrough',
}

type SliderMultiRangeProps = {
  sliderValues: Array<number>;
  colors: Array<string>;
  onChange: (updated: Array<number>) => void; //function to update the values
  min?: number;
  max?: number;
  thickness?: number;
  thumbSize?: number;
  length?: string;
  orientation?: Orientation[keyof Orientation];
  slideMode?: SlideMode | string;
  trackClickable?: boolean;
  hideTrack?: boolean;
};

const SliderMemo = memo(Slider);

export const SliderMultiRange = ({
  sliderValues = [0, 0, 0],
  onChange,
  min = 0,
  max = 100,
  thickness = 15,
  thumbSize = 30,
  slideMode = SlideMode.MAGNETIC,
  orientation = Orientation.HORIZONTAL,
  trackClickable = false,
  hideTrack = true,
}: SliderMultiRangeProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // To track the active element

  const restrictBoundaries = (index: number, value: number) => {
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

  // Debounced handler to optimize the onChange event
  const debouncedOnChangeHandler = debounce((value: number, index: number) => {
    let updatedValues: Array<number> = [...sliderValues];

    setActiveIndex(index);

    if (slideMode === SlideMode.RESTRICT) {
      updatedValues[index] = restrictBoundaries(index, value);
    }

    if (slideMode === SlideMode.MAGNETIC) {
      updatedValues[index] = value;
      if (value < updatedValues[index]) {
        for (let i = index; i > 0; i--) {
          if (updatedValues[i] - updatedValues[i - 1] <= 0) {
            updatedValues[i - 1] = updatedValues[i];
          }
        }
      }
      if (value > updatedValues[index]) {
        for (let i = index; i < sliderValues.length - 1; i++) {
          if (updatedValues[i + 1] - updatedValues[i] <= 0) {
            updatedValues[i + 1] = updatedValues[i];
          }
        }
      }
    }

    if (slideMode === SlideMode.SLIDETHROUGH) {
      updatedValues[index] = value;
    }

    // Only update the parent component if the value has changed
    if (updatedValues !== sliderValues) {
      onChange(updatedValues);
    }
  }, 100); // Adjust debounce delay as needed

  const sliderMultiRangeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      data-component="SliderMultiRange"
      ref={sliderMultiRangeRef}
      className={[
        orientation === Orientation.HORIZONTAL && 'w-full',
        orientation === Orientation.VERTICAL && 'h-full',
        'relative',
      ].join(' ')}
    >
      <div
        data-component="SliderTrack"
        className="absolute border rounded-full bg-orange-500"
        style={{
          ...(orientation === Orientation.HORIZONTAL && {
            width: '100%',
            height: `${thickness}px`,
          }),
          ...(orientation === Orientation.VERTICAL && {
            width: `${thickness}px`,
            height: '100%',
          }),
        }}
      />
      
      {(sliderValues || []).map((sliderValue, index) => {
        const calculatedOffset =
          orientation === Orientation.HORIZONTAL
            ? `${thumbSize * index}px`
            : `${(sliderValues.length - 1 - index) * thumbSize}px`;

        return (
          <SliderMemo
            orientation={orientation}
            key={index}
            value={sliderValue}
            index={index}
            className="absolute"
            onChange={(value: number) => debouncedOnChangeHandler(value, index)}
            length={
              slideMode === SlideMode.SLIDETHROUGH
                ? '100%'
                : `calc(100% - ${(sliderValues.length - 1) * thumbSize}px)`
            }
            min={min}
            max={max}
            style={{ zIndex: index === activeIndex ? 1 : 0 }}
            offset={slideMode === SlideMode.SLIDETHROUGH ? '0px' : calculatedOffset}
            trackClickable={trackClickable}
            hideTrack={hideTrack}
            thumbSize={thumbSize}
            thickness={thickness}
          />
        );
      })}
    </div>
  );
};
