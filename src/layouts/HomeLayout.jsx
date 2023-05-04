import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import Logo from '../assets/logo'
import GithubIcon from '../icons/GithubIcon'
import Icon from '../components/Icon'
import Button from '../components/Button'
import ToggleDarkMode from '../components/ToggleDarkMode'
import Heading from '../components/Heading'

const HomeLayoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    'head head head'
    'nav main main'
    'nav main main';
  grid-template-columns: 250px auto auto;
  height: 100vh;

  header {
    grid-area: head;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 70px;

    position: sticky;
    top: 0;

    border-bottom: 1px solid lightgray;
    z-index: 1;
    background: var(--clr-background);
    color: var(--clr-foreground);
  }

  .headerLeft {
    display: flex;
    align-items: center;
  }

  .headerRight {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
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

  aside {
    grid-area: nav;
    border-right: 1px solid lightgray;
    overflow-x: hidden;
    overflow-y: auto;
    position: sticky;
    top: 0;
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
    font-size: 0.9rem;
  }

  nav a:hover {
    color: var(--clr-foreground);
  }

  nav a.active {
    color: var(--clr-foreground);
  }

  main {
    grid-area: main;
    overflow-y: auto;
    padding: 40px;
  }
`

export const HomeLayout = () => {
  const navigate = useNavigate()

  return (
    <HomeLayoutContainer>
      <header>
        <div className="headerLeft">
          <div className="logo">
            <Button intent="icon" onClick={() => navigate('/')}>
              <Icon className="icon" size="50px">
                <Logo />
              </Icon>
              <span>SWAGFINGER-UI</span>
            </Button>
          </div>
        </div>

        <div className="headerRight">
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
        </div>
      </header>
      <aside>
        <nav>
          <Heading variation="h5">Guide</Heading>

          <NavLink to="introduction">Introduction</NavLink>
          <NavLink to="gettingstarted">Getting started</NavLink>
          <NavLink to="routing">Routing</NavLink>
          <NavLink to="layout">Layout</NavLink>
          <NavLink to="themes">Themes</NavLink>
          <NavLink to="styling">Styling</NavLink>
          <NavLink to="hooks">Hooks</NavLink>

          <br />
          <Heading variation="h5">Components</Heading>
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
          <NavLink to="progressloader">Progress Loader</NavLink>
          <NavLink to="Spinner">Spinner</NavLink>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </HomeLayoutContainer>
  )
}
