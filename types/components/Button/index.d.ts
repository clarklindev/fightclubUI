import React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: any;
export interface ButtonVariants extends VariantProps<typeof buttonVariants> {
    intent?: string;
    padding?: string;
    size?: string;
    focus?: string;
    className?: string;
    ariaLabel?: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonVariants & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=index.d.ts.map