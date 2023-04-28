import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

//context
import DarkModeContext from './context/DarkModeContext'

//styling
import './App.css'

//theming
import { defaultTheme } from './themes/DefaultTheme'
import { darkTheme } from './themes/DarkTheme'

const App = () => {
  const { state } = useContext(DarkModeContext)

  console.log('state: ', state)

  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
