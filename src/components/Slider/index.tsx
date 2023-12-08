import React, { useRef, useEffect, useState } from 'react';

import { Orientation } from '@swagfinger/types/Orientation';

import styles from './Slider.module.css';
// ------------------------------------------------------------------------------------------------------------------------------------------------

type SliderProps = {
  onChange?: (value: number, index: number) => void;
  value: number;
  offset?: string;
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
  thickness?: number;
  parentRef?: React.RefObject<HTMLDivElement>;
};

const Slider = (props: SliderProps) => {
  //note: if you use rest operator in params eg. { orientation, thickness, ...props}, it does not include orientation or thickness/ rather destruct from props object

  const { orientation = Orientation.HORIZONTAL, thickness = 15, offset = '0px', ...restProps } = props;

  const [intiatedRef, setInitiatedRef] = useState<React.RefObject<HTMLDivElement>>();
  const myRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (myRef?.current) {
      setInitiatedRef(myRef);
    }
  }, [myRef]);

  const w = orientation === Orientation.HORIZONTAL ? '100%' : `${thickness}px`;
  const h = orientation === Orientation.HORIZONTAL ? `${thickness}px` : '100%';

  return (
    <div
      data-component={Slider.name}
      ref={myRef}
      style={{
        width: w,
        height: h,
        marginLeft: orientation === 'horizontal' ? `${offset}` : undefined,
        marginTop: orientation === 'vertical' ? `${offset}` : undefined,
      }}
      className={['absolute'].join(' ')}>
      <SliderInput orientation={orientation} thickness={thickness} {...restProps} parentRef={intiatedRef} />
    </div>
  );
};

const SliderInput = ({
  parentRef,
  ...props
}: SliderProps & { parentRef: React.RefObject<HTMLDivElement> | undefined }) => {
  const {
    onChange = _ => {},
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    index = 0,
    className = '',
    thumbSize = 15,
    trackClickable = true,
    hideTrack = false,
    valueGradient = undefined,
    activeColor = 'red',
    trackColor = '#FF000055',
    thickness,
    orientation,
  } = props;

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

      className={[
        styles.slider,
        hideTrack ? 'bg-transparent' : '',
        `pointer-events-${trackClickable ? 'auto' : 'none'}`,
      ].join(' ')}
      style={
        orientation === Orientation.HORIZONTAL
          ? {
              width: `${localParentRef?.current?.offsetWidth}px`,
              height: `${localParentRef?.current?.offsetHeight}px`,
            }
          : {
              transformOrigin: `top left`, //order matters
              width: `${localParentRef?.current?.offsetHeight}px`, //swop width/height as it will be rotated... order matters
              height: `${localParentRef?.current?.offsetWidth}px`, //swop width/height as it will be rotated... order matters
              transform: `translateY(${localParentRef?.current?.offsetHeight}px) rotate(-90deg)`, //order matters
            }
      }
    />
  );
};

Slider.displayName = 'Slider';

Slider.SliderInput = SliderInput;
SliderInput.displayName = 'Slider.SliderInput';

export { Slider };
