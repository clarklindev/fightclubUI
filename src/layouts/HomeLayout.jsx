import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import Logo from '../assets/logo'
import GithubIcon from '../icons/GithubIcon'
import Icon from '../components/Icon'
import Button from '../components/Button'
import ToggleDarkMode from '../components/ToggleDarkMode'

const HomeLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 4fr;
  grid-template-areas:
    'navigation header'
    'navigation main';
  width: 100%;

  header {
    grid-area: header;
    width: 100%;
    height: 70px;
    top: 0;
    position: fixed;
    border-bottom: 1px solid lightgray;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    padding: 20px;

    background: var(--clr-background);
    color: var(--clr-foreground);
  }

  .logo {
    position: fixed;
    margin-left: 5px;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo span {
    font-weight: 600;
  }
  .logo .icon {
    fill: var(--clr-foreground);
  }

  .spacing {
    z-index: 1;
    top: 0;
    position: sticky;
    border-bottom: 1px solid lightgray;
    background: var(--clr-background);
    color: var(--clr-foreground);
  }

  aside {
    grid-area: navigation;
    width: 250px;
    height: 100%;
    overflow-x: hidden;
    position: fixed;
    overflow-y: auto;
    z-index: 1;
  }

  nav {
    padding: 25px 25px 120px 25px;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  nav a {
    padding: 3px 10xpx;
    border-radius: 5px;
    color: #7d7d7d;
  }

  nav a:hover {
    color: var(--clr-foreground);
  }

  nav a.active {
    color: var(--clr-foreground);
  }

  main {
    grid-area: main;
    padding: 25px;
  }
`

export const HomeLayout = () => {
  const [headerMarginTop, setHeaderMarginTop] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight
    setHeaderMarginTop(headerHeight)
  }, [])

  return (
    <HomeLayoutContainer>
      <header>
        <ToggleDarkMode />
        <Link
          to="https://github.com/swagfinger/swagfinger-ui"
          target="_blank"
          aria-label="github repo"
        >
          <Icon size="25px" fillOpacity="1">
            <GithubIcon />
          </Icon>
        </Link>
      </header>
      <aside>
        <div className="spacing" style={{ height: `${headerMarginTop}px` }}>
          <div className="logo">
            <Button variation="icon" onClick={() => navigate('/')}>
              <Icon className="icon" size="60px">
                <Logo />
              </Icon>
              <span>SWAGFINGER-UI</span>
            </Button>
          </div>
        </div>
        <nav>
          <NavLink to="routing">Routing</NavLink>
          <NavLink to="layout">Layout</NavLink>
          <NavLink to="themes">Themes</NavLink>
          <NavLink to="styling">Styling</NavLink>
          <NavLink to="heading">Heading</NavLink>
          <NavLink to="text">Text</NavLink>
          <NavLink to="icon">Icon</NavLink>
          <NavLink to="labelsomething">LabelSomething</NavLink>
          <NavLink to="button">Button</NavLink>
          <NavLink to="input">Input</NavLink>
          <NavLink to="select">Select</NavLink>
          <NavLink to="accordion">Accordion</NavLink>
          <NavLink to="radiobutton">RadioButton</NavLink>
          <NavLink to="radiobuttongroup">RadioButton Group</NavLink>
          <NavLink to="checkbox">Checkbox</NavLink>
          <NavLink to="checkboxgroup">Checkbox Group</NavLink>
          <NavLink to="counter">Counter</NavLink>
          <NavLink to="togglebutton">Toggle Button</NavLink>
          <NavLink to="toggleswitch">Toggle Switch</NavLink>
          <NavLink to="snackbar">Snackbar</NavLink>
          <NavLink to="slider">Slider</NavLink>
          <NavLink to="slidermultirange">Slider (Multirange)</NavLink>
          <NavLink to="separator">Separator</NavLink>
          <NavLink to="list">List</NavLink>
          <NavLink to="table">Table</NavLink>
          <NavLink to="card">Card</NavLink>
          <NavLink to="tree">Tree</NavLink>
          <NavLink to="hooks">Hooks</NavLink>
        </nav>
      </aside>

      <main style={{ marginTop: `${headerMarginTop}px` }}>
        <Outlet style={{ overflow: 'hidden' }} />
      </main>
    </HomeLayoutContainer>
  )
}
