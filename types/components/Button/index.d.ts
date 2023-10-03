import React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: any;
export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
    intent?: string;
    padding?: string;
    size?: string;
    className?: string;
    ariaLabel?: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonVariants & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=index.d.ts.map