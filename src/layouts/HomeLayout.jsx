import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Icon, Button, Heading } from '../components';
import logo from '../assets/logo.svg';
import githubIcon from '../assets/github.svg';
import darkmodeIcon from '../assets/darkmode.svg';

const HomeLayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'header'
    'container';
  overflow-y: scroll;

  header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    position: fixed;
    padding: 0 4rem;

    border-bottom: var(--border);
    z-index: 1;
    background: var(--clr-background);

    color: var(--clr-foreground);

    .headerLeft {
      display: flex;
      align-items: center;
    }

    .headerRight {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-right: 5px; //margin must be same as scrollbar width
    }

    .logo {
      position: fixed;
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
  }

  .container {
    grid-area: container;
    padding: 0px 4rem;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-areas: 'nav content';
  }

  aside.nav {
    height: calc(100vh - 50px);
    width: 250px;
    position: fixed;
    grid-area: nav;
    overflow-x: hidden;
    overflow-y: hidden;
    border-right: var(--border);
    &:hover {
      overflow-y: auto;
    }

    nav {
      padding: 2rem 0px;
      display: flex;
      flex-direction: column;
      z-index: 1;
    }

    nav a {
      padding: 5px 10px 5px 0px;
      border-radius: 5px;
      color: #7d7d7d;
      font-size: 0.9rem;
      font-weight: 400;

      &:hover {
        color: var(--clr-foreground);
      }

      &.active {
        color: var(--clr-foreground);
      }
    }
  }

  .content {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-template-areas: 'main onthispage';
  }

  main {
    grid-area: main;
    padding: 2rem;
  }

  aside.onthispage {
    grid-area: onthispage;
    border-left: var(--border);
    border-right: var(--border);
  }
`;

export const HomeLayout = () => {
  const navigate = useNavigate();

  const navRef = useRef(null);
  const containerRef = useRef(null);

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HomeLayoutContainer>
      <header>
        <div className="headerLeft">
          <div className="logo">
            <Button intent="icon" padding="none" onClick={() => navigate('/')}>
              <Icon className="icon" size="25px">
                <img src={logo} alt="logo" />
              </Icon>
              <span>SWAGFINGER-UI</span>
            </Button>
          </div>
        </div>

        <div className="headerRight">
          <Link to="https://github.com/swagfinger/swagfinger-ui" target="_blank" aria-label="github repo">
            <Icon size="25px" fillOpacity="1" fill="#FFF" stroke="#FFF">
              <img src={githubIcon} alt="github" />
            </Icon>
          </Link>

          <Icon size="25px">
            <img src={darkmodeIcon} alt="darkmode" />
          </Icon>
        </div>
      </header>

      <div className="container" ref={containerRef}>
        <aside className="nav" ref={navRef}>
          <nav>
            <Heading variation="h6">Components</Heading>
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
            <NavLink to="spinner">Spinner</NavLink>
            <NavLink to="resizepanel">Resize panel</NavLink>
            <br />

            <Heading variation="h6">Guide</Heading>
            <NavLink to="introduction">Introduction</NavLink>
            <NavLink to="gettingstarted">Getting started</NavLink>
            <NavLink to="routing">Routing</NavLink>
            <NavLink to="layout">Layout</NavLink>
            <NavLink to="themes">Themes</NavLink>
            <NavLink to="styling">Styling</NavLink>
            <NavLink to="hooks">Hooks</NavLink>

            <br />
          </nav>
        </aside>
        <div className="content">
          <main>
            <Outlet />
          </main>
          <aside className="onthispage"></aside>
        </div>
      </div>
    </HomeLayoutContainer>
  );
};
