import { Outlet, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Icon, Button, Heading, CustomNavLink } from '../components';
import { CloseIcon, MenuIcon } from '../icons';
import { useSideMenu } from '../context/SidemenuContext';

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
    padding: 1rem 2rem;
    overflow-x: hidden;
    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
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
  .headerLeft > .menu-btn {
    border-radius: 0;
    background: transparent;
    padding: 1rem 2rem;
    display: fixed;
    position: absolute;
    left: 0;

    @media (min-width: 768px) {
      display: none;
    }
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

const AsideNavigation = styled.aside<{ isOpen: boolean }>`
  nav {
    display: flex;
    flex-direction: column;
  }
  padding: 1rem 2rem;
  z-index: 1;

  min-width: 100%;
  display: block;
  position: fixed;
  height: calc(100dvh - 50px);
  overflow-x: hidden;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }

  ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};
  background: white;

  nav > .close-btn {
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    right: 0px;
    border-radius: 0;
    background: transparent;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    overflow-y: auto;
    body {
      font-size: 1.2rem;
    }
    nav a {
      padding: 10px 10px 10px 0px;
    }
  }

  @media (min-width: 577px) {
    ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};

    border-right: var(--border);

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

  @media (min-width: 768px) {
    min-width: 250px;

    padding: 2rem;

    background: transparent;
    display: block;
    grid-area: nav;
    nav a {
      font-size: 0.9rem;
      padding: 5px 10px 5px 0px;
    }
    .close-btn {
      display: none;
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
  const { isOpen, toggleMenu, closeMenu } = useSideMenu();

  return (
    <HomeLayoutContainer>
      <Header>
        <div className="headerLeft">
          {!isOpen && (
            <Button className="menu-btn" intent="icon" onClick={toggleMenu}>
              <Icon size="20px">
                <MenuIcon />
              </Icon>
            </Button>
          )}
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
            <Icon size="20px" fillOpacity="1" fill="#FFF" stroke="#FFF">
              <img src={githubIcon} alt="github" />
            </Icon>
          </Link>

          <Icon size="20px">
            <img src={darkmodeIcon} alt="darkmode" />
          </Icon>
        </div>
      </Header>

      <div className="container">
        <AsideNavigation isOpen={isOpen}>
          <nav>
            <Button className="close-btn" intent="icon" onClick={toggleMenu}>
              <Icon size="20px">
                <CloseIcon />
              </Icon>
            </Button>
            <Heading variation="h6">Guide</Heading>
            <CustomNavLink to="introduction">Introduction</CustomNavLink>
            <CustomNavLink to="gettingstarted">Getting started</CustomNavLink>
            <CustomNavLink to="routing">Routing</CustomNavLink>
            <CustomNavLink to="layout">Layout</CustomNavLink>
            <CustomNavLink to="themes">Themes</CustomNavLink>
            <CustomNavLink to="styling">Styling</CustomNavLink>
            <br />
            {/* utility helper components */}
            <Heading variation="h6">Utility</Heading>
            <CustomNavLink to="labelsomething">LabelSomething</CustomNavLink>
            <CustomNavLink to="resizepanel">Resize panel</CustomNavLink>
            <CustomNavLink to="dimensions">Dimensions</CustomNavLink>
            <CustomNavLink to="hooks">Hooks</CustomNavLink>
            <br />
            <Heading variation="h6">Components</Heading>
            <CustomNavLink to="heading">Heading</CustomNavLink>
            <CustomNavLink to="text">Text</CustomNavLink>
            <CustomNavLink to="icon">Icon</CustomNavLink>
            <CustomNavLink to="button">Button</CustomNavLink>
            <CustomNavLink to="input">Input</CustomNavLink>
            <CustomNavLink to="select">Select</CustomNavLink>
            <CustomNavLink to="accordion">Accordion</CustomNavLink>
            <CustomNavLink to="radiobutton">RadioButton</CustomNavLink>
            <CustomNavLink to="radiobuttongroup">RadioButton Group</CustomNavLink>
            <CustomNavLink to="checkbox">Checkbox</CustomNavLink>
            <CustomNavLink to="checkboxgroup">Checkbox Group</CustomNavLink>
            <CustomNavLink to="counter">Counter</CustomNavLink>
            <CustomNavLink to="togglebutton">Toggle Button</CustomNavLink>
            <CustomNavLink to="toggleswitch">Toggle Switch</CustomNavLink>
            <CustomNavLink to="snackbar">Snackbar</CustomNavLink>
            <CustomNavLink to="slider">Slider</CustomNavLink>
            <CustomNavLink to="slidermultirange">Slider (Multirange)</CustomNavLink>
            <CustomNavLink to="separator">Separator</CustomNavLink>
            <CustomNavLink to="list">List</CustomNavLink>
            <CustomNavLink to="table">Table</CustomNavLink>
            <CustomNavLink to="card">Card</CustomNavLink>
            <CustomNavLink to="tree">Tree</CustomNavLink>
            <CustomNavLink to="progressloader">Progress Loader</CustomNavLink>
            <CustomNavLink to="spinner">Spinner</CustomNavLink>
            <br />
          </nav>
        </AsideNavigation>

        <main>
          <Outlet />
        </main>
        <AsideOnThePage />
      </div>
    </HomeLayoutContainer>
  );
};
