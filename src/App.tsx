import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

//styling
import './App.css'

//theming
import { defaultTheme } from './themes/DefaultTheme'

const App = () => {
  const [theme, setTheme] = useState({})

  useEffect(() => {
    setTheme(defaultTheme)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
