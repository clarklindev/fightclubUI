import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Button from '../Button'

//context
import DarkModeContext from '../../context/DarkModeContext'

const ToggleDarkModeContainer = styled(Button)`
  cursor: pointer;
  opacity: 0.8;
  border-radius: 50%;
  padding: 5px;

  .toggle-circle {
    stroke: none;
    transition: transform 500ms ease-out;
  }
  .toggle-sun {
    transform-origin: center center;
    transition: transform 750ms cubic-bezier(0.11, 0.14, 0.29, 1.32);
  }

  &.isOff {
    .toggle-circle {
      transform: translateX(-15%);
    }
    .toggle-sun {
      transform: rotate(0.5turn);
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    opacity: 1;
    background: hsl(0 0% 50% / 0.15);
  }
`

const ToggleDarkMode = () => {
  const { state, setIsDarkMode } = useContext(DarkModeContext)

  const enableDarkMode = () => {
    console.log('enableDarkMode')
    toggleColorScheme('dark')
  }

  const enableLightMode = () => {
    console.log('enableLightMode')
    toggleColorScheme('light')
  }

  const toggleColorScheme = colorScheme => {
    document.documentElement.style.setProperty('color-scheme', colorScheme)
  }

  const toggleState = () => {
    setIsDarkMode(!state.darkMode)
    state.darkMode ? enableLightMode() : enableDarkMode()
  }

  return (
    <ToggleDarkModeContainer
      id="theme-toggle"
      onClick={toggleState}
      className={state.darkMode ? 'isOn' : 'isOff'}
      intent="icon"
    >
      <Icon size="25px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="472.39"
          height="472.39"
          viewBox="0 0 472.39 472.39"
          fill="currentColor"
        >
          <g className="toggle-sun">
            <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
          </g>
          <g className="toggle-circle">
            <circle className="cls-1" cx="236.2" cy="236.2" r="103.78" />
          </g>
        </svg>
      </Icon>
    </ToggleDarkModeContainer>
  )
}

export default ToggleDarkMode
