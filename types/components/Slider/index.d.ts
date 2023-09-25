import React from 'react';
import { Orientation } from '../../types/Orientation';
type SliderProps = {
    onChange: (value: number, index: number) => void;
    orientation?: Orientation | string;
    length?: string;
    offset?: string;
    thickness?: number;
    value: number;
    min?: number;
    max?: number;
    step?: number;
    index?: number;
    thumbSize?: number;
    trackClickable?: boolean;
    hideTrack?: boolean;
    className?: string;
    valueGradient?: string | undefined;
    activeColor?: string;
    trackColor?: string;
    style?: React.CSSProperties;
};
export declare const Slider: React.FC<SliderProps>;
export {};
//# sourceMappingURL=index.d.ts.map