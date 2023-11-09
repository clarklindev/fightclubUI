import React from 'react';
interface OnThisPageContextType {
    observablesInView: boolean[] | null;
    setObservablesInView: (_: boolean[]) => void;
    observables: Array<HTMLElement> | null;
    setObservables: (_: Array<HTMLElement>) => void;
}
type OnThisPageProps = {
    children: React.ReactNode;
};
export declare const OnThisPageContextProvider: ({ children }: OnThisPageProps) => import("react/jsx-runtime").JSX.Element;
export declare const useOnThisPage: () => OnThisPageContextType;
export {};
//# sourceMappingURL=OnThisPageContext.d.ts.map