import React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: any;
export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
    intent?: string;
    size?: string;
    className?: string;
    ariaLabel?: string;
    children: React.ReactNode;
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonVariants>;
export {};
//# sourceMappingURL=index.d.ts.map