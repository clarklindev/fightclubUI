import React, { useRef, useEffect, useState } from 'react';
import { Orientation } from '@swagfinger/types/Orientation';
import { SliderProvider, useSlider } from '@swagfinger/context/SliderContext';
// ------------------------------------------------------------------------------------------------------------------------------------------------

const Slider = (props: SliderProps) => {
  return (
    <SliderProvider>
      <SliderContainer {...props} />
    </SliderProvider>
  );
};

type SliderProps = {
  onChange?: (value: number, index: number) => void;
  value: number;

  min?: number;
  max?: number;
  step?: number;
  className?: string;
  orientation?: Orientation[keyof Orientation];

  index?: number; //used in multislider
  thumbSize?: number;
  trackClickable?: boolean;
  hideTrack?: boolean;
  valueGradient?: string | undefined;
  activeColor?: string;
  trackColor?: string;
  thickness?: string;
  parentRef?: React.RefObject<HTMLDivElement>;
};

const SliderContainer = (props: SliderProps) => {
  const { orientation, thickness } = props;

  const [intiatedRef, setInitiatedRef] = useState<React.RefObject<HTMLDivElement>>();
  const myRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (myRef?.current) {
      setInitiatedRef(myRef);
    }
  }, [myRef]);

  const w = orientation === Orientation.HORIZONTAL ? '100%' : thickness;
  const h = orientation === Orientation.HORIZONTAL ? thickness : '100%';
  return (
    <div
      data-component={SliderContainer.name}
      ref={myRef}
      style={{ position: 'relative', border: '1px solid green', width: w, height: h }}>
      <SliderInput {...props} parentRef={intiatedRef} />
    </div>
  );
};

const SliderInput = ({
  orientation,
  onChange = () => {},
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  index = 0,
  className = '',
  thumbSize = 30,
  trackClickable = true,
  hideTrack = false,
  valueGradient = undefined,
  activeColor = 'red',
  trackColor = '#FF000055',
  parentRef,
}: SliderProps) => {
  const [localParentRef, setLocalParentRef] = useState<React.RefObject<HTMLDivElement> | null>(null);
  useEffect(() => {
    if (parentRef?.current) {
      setLocalParentRef(parentRef);
    }
  }, [parentRef]);

  useEffect(() => {
    console.log('localParentRef offsetHeight: ', localParentRef?.current?.offsetHeight);
  }, [localParentRef]);

  return (
    <input
      type="range"
      onChange={event => onChange(parseInt(event.target.value), index)} //reads string from target, but passes number
      value={value}
      min={min}
      max={max}
      step={step}
      // background={
      //   valueGradient ||
      //   `linear-gradient(90deg, ${activeColor} 0%, ${activeColor} ${value}%, ${trackColor} ${value}%, ${trackColor} 100% )`
      // }
      className={[`absolute`, `bg-red-500`, `border`, `border-red-500`].join(' ')}
      style={
        orientation === Orientation.HORIZONTAL
          ? {
              width: `${localParentRef?.current?.offsetWidth}px`,
              height: `${localParentRef?.current?.offsetHeight}px`,
            }
          : {
              width: `${localParentRef?.current?.offsetHeight}px`,
              height: `${localParentRef?.current?.offsetWidth}px`,
              transformOrigin: 'top left',
              transform: `translateY(${localParentRef?.current?.offsetHeight}px) rotate(-90deg)`,
            }
      }
    />
  );
};

// pointer-events: ${({ trackClickable }) => (trackClickable ? 'auto' : 'none')};
// border-radius: 10px;
// outline: none;

// appearance: none;
// -webkit-appearance: none;
// -moz-appearance: none;

//slider track
// ${({ hideTrack, background, thickness }) =>
//   `
//   background: ${hideTrack ? 'transparent' : background};
//   height: ${thickness}px;
//   border-radius: 10px;

//   &::-moz-range-track{
//     background: ${hideTrack ? 'transparent' : background};
//     height: ${thickness}px;
//     border-radius: 10px;
//   }

//   &::-webkit-slider-runnable-track {
//     background: ${hideTrack ? 'transparent' : background};
//     height: ${thickness}px;
//     border-radius: 10px;
//   }
// `};

// &::-moz-range-thumb {
//   appearance: none;

//   width: ${({ thumbSize }) => thumbSize}px;
//   height: ${({ thumbSize }) => thumbSize}px;
//   background: #666;
//   border: 1px solid red;
//   border-radius: 50%;
//   cursor: pointer;
//   pointer-events: auto;
// }

// &::-webkit-slider-thumb {
//   -webkit-appearance: none;
//   width: ${({ thumbSize }) => thumbSize}px;
//   height: ${({ thumbSize }) => thumbSize}px;
//   background: #666;
//   border: 1px solid red;
//   border-radius: 50%;
//   cursor: pointer;
//   pointer-events: auto;
//   transform: translateY(
//     ${({ thumbSize, thickness }) =>
//       `${thickness > thumbSize ? -0.5 * (thumbSize - thickness) : 0.5 * (thickness - thumbSize)}px`}
//   );
// }
// `;

Slider.displayName = 'Slider';

Slider.SliderContainer = SliderContainer;
SliderContainer.displayName = 'Slider.SliderContainer';

Slider.SliderInput = SliderInput;
SliderInput.displayName = 'Slider.SliderInput';

export { Slider };
