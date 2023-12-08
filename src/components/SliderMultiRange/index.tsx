import { useEffect, useRef, useState } from 'react';
import { Slider } from '@swagfinger/components';
import { Orientation } from '@swagfinger/types/Orientation';

//valueGradient
// const startPercentage = sliderValue; // Adjust this value to set the start point
// const endPercentage = '80%'; // Adjust this value to set the start point
//middle
// start would be previous' end
// end would be next's start
//const valueGradient =  `linear-gradient(90deg, transparent 0%, transparent ${startPercentage}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;
//last
//const valueGradient =  `linear-gradient(90deg, transparent 0%, transparent ${sliderValue}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;

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
  thickness?: number; //needs to be number to do comparison with 'thumbSize'
  thumbSize?: number; //needs to be number to do comparison with 'thickness'
  orientation?: Orientation[keyof Orientation];
  slideMode?: SlideMode[keyof SlideMode];
};

export const SliderMultiRange = (props: SliderMultiRangeProps) => {
  return (
    <div className="w-full relative">
      <SliderTrack {...props} />
      <Sliders {...props} />
    </div>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

//this is the background track for all the scrollbars - you want to show this instead of sliders' own track
const SliderTrack = ({ thickness = 15, thumbSize = 15 }: SliderMultiRangeProps) => {
  return (
    <div
      data-component="SliderTrack"
      className={[
        `absolute border-0 rounded-0 w-full bg-yellow-300 bg-opacity-30`,
        `h-[${thickness}px]`,
        thickness && thumbSize && thickness > thumbSize ? `top-0` : `top-full`,
      ].join(' ')}
    />
  );
};

const Sliders = ({
  sliderValues = [0, 0, 0],
  // colors = ['red', 'yellow', 'blue'],
  onChange = () => {},
  min = 0,
  max = 100,
  thickness = 15,
  thumbSize = 15,
  slideMode = SlideMode.MAGNETIC,
  orientation = Orientation.HORIZONTAL,
}: SliderMultiRangeProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // To track the active element

  const restrictBoundaries = (index: number, value: number) => {
    //check if single element in sliderValues || if last element in sliderValues
    let _min: number = sliderValues.length === 1 || index === 0 ? min : sliderValues[index - 1]; //can check index-1 because index (0) is covered
    let _max: number = sliderValues.length === 1 || index === sliderValues.length - 1 ? max : sliderValues[index + 1]; //can check index+1 because index (sliderValues.length - 1) is covered

    if (value <= _min) {
      value = _min;
    }
    if (value >= _max) {
      value = _max;
    }
    return value;
  };

  //function that gets called everytime one of the sliders value changes
  const onChangeHandler = (value: number, index = 0) => {
    let updatedValues;

    console.log('slideMode: ', slideMode);
    setActiveIndex(index);

    if (slideMode === SlideMode.RESTRICT) {
      //restrict method - values dont go below prev or over next's value
      const restricted = restrictBoundaries(index, value);
      updatedValues = [...sliderValues];
      updatedValues[index] = restricted;
    }

    if (slideMode === SlideMode.MAGNETIC) {
      //magnet effect
      // change other values too - slide other values
      updatedValues = [...sliderValues];
      // //if its opposite direction to linked movement
      // //note if you use a value of <=1 and >= 1 in the difference if() check, it will have a magnetic effect. we use 0.5
      if (value < updatedValues[index]) {
        updatedValues[index] = value;
        for (var i = index; i > 0; i--) {
          //use comparison <=1 for magnetic effect
          if (updatedValues[i] - updatedValues[i - 1] <= 0) {
            updatedValues[i - 1] = updatedValues[i];
          }
        }
      }
      if (value > updatedValues[index]) {
        updatedValues[index] = value;
        for (var i = index; i < sliderValues.length - 1; i++) {
          //use comparison <=1 for magnetic effect
          if (updatedValues[i + 1] - updatedValues[i] <= 0) {
            updatedValues[i + 1] = updatedValues[i];
          }
        }
      }
    }

    if (slideMode === SlideMode.SLIDETHROUGH) {
      //mode is slidethrough
      updatedValues = [...sliderValues];
      updatedValues[index] = value;
    }

    if (updatedValues) {
      onChange(updatedValues);
    }
  };

  const slidersRef = useRef<HTMLDivElement>(null);
  const [adjustedWidth, setAdjustedWidth] = useState<number>();

  useEffect(() => {
    if (slidersRef?.current) {
      const w = `calc(100% - ${
        slideMode === SlideMode.SLIDETHROUGH ? '0px' : thumbSize * (sliderValues?.length - 1) + 'px'
      })`;

      setAdjustedWidth(w);
    }
  }, [slidersRef]);

  return (
    <div
      data-component="Sliders"
      ref={slidersRef}
      style={{
        width: adjustedWidth && adjustedWidth,
      }}>
      {(sliderValues || []).map((sliderValue, index) => {
        return (
          <Slider
            orientation={orientation}
            className=""
            key={index}
            value={sliderValue}
            index={index}
            onChange={onChangeHandler}
            min={min}
            max={max}
            style={{ zIndex: index === activeIndex ? 1 : 0 }} //z-index
            offset={slideMode === SlideMode.SLIDETHROUGH ? '0px' : thumbSize * index + 'px'}
            //x position to place the <Slider/> you cant see this of each individual slider if position="absolute". only when className = "" and hideTrack="false"
            trackClickable={false} //you want to leave this FALSE for multirange input
            hideTrack={true} //you want to leave this as TRUE for multirange input - <SliderTrack /> replaces this
            thumbSize={thumbSize}
            thickness={thickness}
          />
        );
      })}
    </div>
  );
};
