import React, { ButtonHTMLAttributes } from 'react';
import { Position } from '../../utils/position';
declare const Dropdown: {
    ({ children }: {
        children: React.ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    DropdownWrapper: ({ children, className, id, autoAdjust, menuAlign, layoutContainer, hoverMode, }: {
        children: React.ReactNode;
        className?: string | undefined;
        id?: string | undefined;
        autoAdjust?: boolean | undefined;
        menuAlign?: string | undefined;
        layoutContainer?: (HTMLElement | React.ReactNode) | null;
        hoverMode?: boolean | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    DropdownTrigger: ({ asChild, children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        asChild?: boolean | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    DropdownMenu: ({ children, className }: {
        children: React.ReactNode;
        className?: string | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    DropdownMenuItem: ({ children, asChild, onClick, }: {
        children: React.ReactNode;
        asChild?: boolean | undefined;
        onClick?: (() => void) | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
export { Dropdown };
//# sourceMappingURL=index.d.ts.map