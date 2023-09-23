// import { useEffect } from 'react';
// import styled from 'styled-components';

// import { Icon, Button } from '../';
// import { useTheme } from '../../context/ThemeContext';

// export const ToggleDarkMode: React.FC = () => {
//   const { isDarkMode, setIsDarkMode } = useTheme();

//   useEffect(() => {
//     toggleColorScheme(isDarkMode ? 'dark' : 'light');
//   }, []);

//   const toggleColorScheme = (colorScheme: string) => {
//     const html = document.querySelector('html');
//     if (html) {
//       html.setAttribute('color-scheme', colorScheme);
//       document.documentElement.style.setProperty('color-scheme', colorScheme);
//     }
//   };

//   const toggleState = () => {
//     console.log('toggle state');
//     setIsDarkMode(!isDarkMode);
//     isDarkMode ? toggleColorScheme('light') : toggleColorScheme('dark');
//   };

//   return (
//     <Button onClick={toggleState} className={isDarkMode ? 'darkMode' : 'lightMode'} intent="plain" style={
//       {.toggle-circle {
//       stroke: none;
//       transition: transform 500ms ease-out;
//     }
//     .toggle-sun {
//       transform-origin: center center;
//       transition: transform 750ms cubic-bezier(0.11, 0.14, 0.29, 1.32);
//     }

//     &.lightMode {
//       .toggle-circle {
//         transform: translateX(-15%);
//       }
//       .toggle-sun {
//         transform: rotate(0.5turn);
//       }
//     }

//     &:hover,
//     &:focus {
//       outline: 0;
//       opacity: 1;
//       background: hsl(0 0% 50% / 0.15);
//     }
//     }}>
//       <Icon size="30px">

//       </Icon>
//     </Button>
//   );
// };
