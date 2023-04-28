import React, { useReducer } from 'react'

const DarkModeContext = React.createContext()

const darkmodeReducer = (state, action) => {
  switch (action.type) {
    case 'setIsDarkMode':
      return { ...state, darkMode: action.payload }

    default:
      return state
  }
}

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkmodeReducer, { darkMode: false })

  const setIsDarkMode = mode => {
    dispatch({ type: 'setIsDarkMode', payload: mode })
  }

  return (
    <DarkModeContext.Provider value={{ state, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContext
