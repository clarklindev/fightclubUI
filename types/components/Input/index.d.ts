import React, { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const inputVariants: any;
export interface InputVariants extends VariantProps<typeof inputVariants> {
    className?: string;
    tw?: string;
    type: string;
    border?: boolean;
    children: React.ReactNode;
    savedData: string;
    placeholder: string;
    readonly: boolean;
    onChange?: () => void;
}
export declare const Input: React.ForwardRefExoticComponent<InputVariants & React.RefAttributes<HTMLInputElement>>;
interface Props {
    children: ReactNode;
    tw?: string;
}
export declare const InputWrapper: ({ children }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map