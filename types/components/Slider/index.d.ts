import React from 'react';
type SliderProps = {
    width: string;
    hideTrack: boolean;
    trackClickable: boolean;
    min: number;
    max: number;
    step: number;
    index: number;
    thumbSize: string;
    backgroundColor: string;
    savedData: number;
    offset: number;
    className: string;
    onChange: (value: number, index: number) => void;
};
export declare const Slider: React.FC<SliderProps>;
export {};
//# sourceMappingURL=index.d.ts.map