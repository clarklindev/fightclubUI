import { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Icon, Button, Heading } from '../components';
import logo from '../assets/logo.svg';
import githubIcon from '../assets/github.svg';
import darkmodeIcon from '../assets/darkmode.svg';

const HomeLayoutContainer = styled.div`
  height: 100dvh;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'header'
    'container';

  .container {
    background: transparent;
    grid-area: container;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'main';
    max-width: 100%;
    position: relative;
    @media (min-width: 768px) {
      grid-template-columns: 250px auto;
      grid-template-areas: 'nav main';
    }
    @media (min-width: 1024px) {
      grid-template-columns: 300px auto;
      grid-template-areas: 'nav main';
    }
    @media (min-width: 1200px) {
      grid-template-columns: 300px auto 300px;
      grid-template-areas: 'nav main onthispage';
      padding: 0 4rem;
    }
  }

  main {
    position: relative;
    background: transparent;
    grid-area: main;
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    overflow-x: hidden;
  }
`;

const Header = styled.header`
  justify-content: center;
  grid-area: header;
  display: flex;
  align-items: center;
  width: calc(100%);
  height: 50px;
  position: fixed;
  z-index: 1;
  border-right: var(--border);
  border-bottom: var(--border);
  background: white;
  color: var(--clr-foreground);
  padding: 0 2rem;

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    padding: 0 4rem 0 4rem;
  }

  .headerLeft {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .headerRight {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .logo {
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
`;

const AsideNavigation = styled.aside`
  background: transparent;
  display: none;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    display: block;
    height: calc(100dvh - 50px);
    position: fixed;
    min-width: 250px;
    grid-area: nav;
    overflow-x: hidden;
    border-right: var(--border);
    padding: 2rem;
    nav {
      display: flex;
      flex-direction: column;
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
  @media (min-width: 1024px) {
    min-width: 300px;
  }
  @media (min-width: 1200px) {
    min-width: 300px;
  }
`;

const AsideOnThePage = styled.aside`
  height: calc(100dvh - 50px);
  grid-area: onthispage;
  display: none;
  background: transparent;
  position: fixed;
  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
  padding: 2rem;

  @media (min-width: 1200px) {
    right: 4rem;
    display: block;
    border-left: var(--border);
    min-width: 300px;
  }
`;

export const HomeLayout = () => {
  const navigate = useNavigate();

  const navRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const [mainWidth, setMainWidth] = useState<number>();

  useEffect(() => {
    if (mainRef?.current) {
      setMainWidth(mainRef.current.clientWidth);
    }

    const resize = () => {
      if (mainRef?.current) {
        setMainWidth(mainRef.current.clientWidth);
      }
    };

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <HomeLayoutContainer>
      <Header>
        <div className="headerLeft">
          <div className="logo">
            <Button intent="plain" padding="none" className="gap-2" onClick={() => navigate('/')}>
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
      </Header>

      <div className="container" ref={containerRef}>
        <AsideNavigation ref={navRef}>
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
        </AsideNavigation>
        <main ref={mainRef}>
          <Outlet />
        </main>
        <AsideOnThePage />
      </div>
    </HomeLayoutContainer>
  );
};
