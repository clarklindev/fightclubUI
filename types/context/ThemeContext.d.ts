import React from 'react';
export declare const useTheme: () => {
    colorMode: string | null;
    checkIsDark: (mode: string) => boolean;
    setColorMode: (mode: string) => void;
};
export declare const ThemeContextProvider: React.FC<{
    children: React.ReactNode;
}>;
//# sourceMappingURL=ThemeContext.d.ts.map