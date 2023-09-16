import React from 'react';
type SliderMultiRange = {
    sliderValues: Array<Number>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    step: number;
    min: number;
    max: number;
    thumbSize: string;
    backgroundColor: string;
    width: string;
};
export declare const SliderMultiRange: React.FC<SliderMultiRange>;
export {};
//# sourceMappingURL=index.d.ts.map