import React from 'react';
import { Orientation } from '@swagfinger/types/Orientation';
declare enum SlideMode {
    RESTRICT = "restrict",
    MAGNETIC = "magnetic",
    SLIDETHROUGH = "slidethrough"
}
type SliderMultiRangeProps = {
    sliderValues: Array<number>;
    colors: Array<string>;
    onChange: (updated: Array<number>) => void;
    min?: number;
    max?: number;
    thickness?: number;
    thumbSize?: number;
    length?: string;
    orientation?: Orientation | string;
    slideMode?: SlideMode | string;
};
export declare const SliderMultiRange: React.FC<SliderMultiRangeProps>;
export {};
//# sourceMappingURL=index.d.ts.map