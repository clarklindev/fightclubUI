import React from 'react';
type LabelSomethingDirection = 'left' | 'right' | 'top' | 'bottom';
interface LabelSomethingProps {
    label: string;
    something: React.ReactNode;
    labelDirection?: LabelSomethingDirection;
    gap?: string;
    labelClickable?: boolean;
}
export declare const LabelSomething: React.FC<LabelSomethingProps>;
export {};
//# sourceMappingURL=index.d.ts.map