import React from 'react';
declare const ThemeContext: React.Context<{
    isDarkMode: boolean;
    setIsDarkMode: (_: boolean) => void;
}>;
export declare const useTheme: () => {
    isDarkMode: boolean;
    setIsDarkMode: (_: boolean) => void;
};
export declare const ThemeContextProvider: React.FC<{
    children: React.ReactNode;
}>;
export default ThemeContext;
