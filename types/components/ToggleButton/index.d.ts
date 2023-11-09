import React from 'react';
import { Icon } from '@swagfinger/components';
type ToggleButtonProps = {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: typeof Icon;
    children?: React.ReactNode;
};
export declare const ToggleButton: React.FC<ToggleButtonProps>;
export {};
//# sourceMappingURL=index.d.ts.map