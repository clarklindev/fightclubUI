import React, { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const inputVariants: any;
export interface InputVariants extends VariantProps<typeof inputVariants> {
    className?: string;
    tw?: string;
    type?: string;
    border?: boolean;
    children?: React.ReactNode;
    value: string;
    placeholder?: string;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.ForwardRefExoticComponent<InputVariants & React.RefAttributes<HTMLInputElement>>;
type InputProps = {
    children: ReactNode;
    tw?: string;
};
export declare const InputWrapper: ({ children }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map