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
export declare const Button: ({ intent, size, className, onClick, ariaLabel, children, ...rest }: ButtonVariants) => import("react/jsx-runtime").JSX.Element;
export {};
