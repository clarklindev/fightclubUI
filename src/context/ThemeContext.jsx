import React, { useReducer } from 'react'

const ThemeContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'setIsDarkMode':
      return { ...state, darkMode: action.payload }

    default:
      return state
  }
}

export const ThemeProvider = ({ children }) => {
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  const [state, dispatch] = useReducer(reducer, { darkMode: isSystemDark })

  const setIsDarkMode = mode => {
    dispatch({ type: 'setIsDarkMode', payload: mode })
  }

  return (
    <ThemeContext.Provider value={{ state, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
