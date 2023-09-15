import React from 'react';
export declare const useTheme: () => {
    isDarkMode: boolean;
    setIsDarkMode: (_: boolean) => void;
};
export declare const ThemeContextProvider: React.FC<{
    children: React.ReactNode;
}>;
