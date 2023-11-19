import { useRef, useEffect } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar, NavSide, Button, Icon, Dropdown, OnThisPage } from '@swagfinger/components';
import { MenuIcon, CloseIcon, ModeDarkIcon, ModeLightIcon, ModeSystemIcon } from '@swagfinger/icons';
import { useMenu } from '@swagfinger/context/MenuContext';
import { useTheme } from '@swagfinger/context/ThemeContext';
import { useScroll } from '@swagfinger/context/ScrollContext';
import { OnThisPageContextProvider } from '@swagfinger/context/OnThisPageContext';

import logo from '@swagfinger/assets/logo.svg';
import githubIcon from '@swagfinger/assets/github.svg';

const HomeLayoutContainer = styled.div`
  position: relative;
  height: 100dvh;
  display: grid;
  grid-template-rows: 50px minmax(0, 1fr);
  grid-template-areas:
    'navbar'
    'content';

  @media (min-width: 2400px) {
    width: 2400px;
    margin: 0 auto;
    max-width: 2400px;
  }
`;

const Content = styled.div`
  grid-area: content;
  position: relative;

  display: grid;
  grid-template-areas: 'container';
  grid-template-columns: minmax(0, 1fr); //NOTE: need grid layout to keep container width in check.

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas: 'navside container';
    grid-template-columns: 250px minmax(0, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-areas: 'navside container';
    grid-template-columns: 300px minmax(0, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'navside container';
    grid-template-columns: 400px minmax(0, 1fr);
  }

  [data-id='navside'] {
    @media (min-width: 768px) {
      grid-area: navside;
    }
    height: calc(100dvh - 50px);
  }
`;

const Container = styled.div<{ isOpen: boolean; className?: string }>`
  ${({ isOpen }) => isOpen && `display: none`};

  position: relative;
  grid-area: container;

  @media (min-width: 640px) {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-areas: 'main onthispage';
    grid-template-columns: minmax(0, 1fr) 400px;
  }

  main {
    grid-area: main;

    white-space: normal;
    padding: 2rem;
    overflow-wrap: break-word;

    @media (min-width: 768px) {
      padding: 3rem;
    }

    @media (min-width: 1024px) {
      padding: 3rem;
    }

    @media (min-width: 1200px) {
      padding: 4rem;
    }
  }

  [data-id='onthispage'] {
    grid-area: onthispage;

    @media (min-width: 1200px) {
      display: block;
      position: fixed;
      padding: 4rem;
      width: 400px;
    }
  }
`;

const setModeIcon = (mode: string | null) => {
  if (null) {
    return;
  }

  switch (mode) {
    case 'dark':
      return (
        <Icon size="20px">
          <ModeDarkIcon />
        </Icon>
      );
    case 'light':
      return (
        <Icon size="20px">
          <ModeLightIcon />
        </Icon>
      );
    case 'system':
      return (
        <Icon size="20px">
          <ModeSystemIcon />
        </Icon>
      );
    default:
      return;
  }
};

export const HomeLayout = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const { colorMode, setColorMode } = useTheme();
  const navigate = useNavigate();
  const { setScrollPercentage, getDocumentScrollPercentage } = useScroll();

  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollHandler = () => {
      const percentage = getDocumentScrollPercentage();
      // console.log(`Scroll position: ${percentage.toFixed(2)}%`);
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <HomeLayoutContainer>
      <Navbar className="navbar">
        <Navbar.Group className="header-left flex flex-col-reverse sm:flex-row justify-center w-full min-w-min gap-2 items-center md:justify-start">
          {/* this is the open/close menuSide button */}
          <div className="min-[320px]:absolute left-8 md:hidden min-[320px]:ml-[-1rem]">
            {!isOpen ? (
              <Button className="menu-btn" intent="icon" onClick={toggleMenu}>
                <Icon size="20px">
                  <MenuIcon />
                </Icon>
              </Button>
            ) : (
              <Button className="close-btn" intent="icon" onClick={toggleMenu}>
                <Icon size="20px">
                  <CloseIcon />
                </Icon>
              </Button>
            )}
          </div>

          <div className="logo relative flex items-center">
            <Icon className="icon min-[320px]:absolute min-[320px]:ml-[-2rem]" size="25px">
              <img src={logo} alt="logo" />
            </Icon>
            <Button intent="plain" padding="none" className="gap-2" onClick={() => navigate('/')}>
              <span className="whitespace-nowrap max-[320px]:hidden">SWAGFINGER-UI</span>
            </Button>
          </div>
        </Navbar.Group>

        <Navbar.Group className="header-right flex-row items-center gap-4 hidden md:flex mr-[-1rem]">
          <Link to="https://github.com/swagfinger/swagfinger-ui" target="_blank" aria-label="github repo">
            <Icon size="20px" fillOpacity="1" fill="#FFF" stroke="#FFF">
              <img src={githubIcon} alt="github" />
            </Icon>
          </Link>

          <Dropdown>
            <Dropdown.Wrapper id="1">
              <Dropdown.Trigger asChild>
                <Button intent="icon">{setModeIcon(colorMode)}</Button>
              </Dropdown.Trigger>
              {/* <Dropdown.Trigger>{setModeIcon(colorMode)}</Dropdown.Trigger> */}
              <Dropdown.Menu className="w-40">
                <Dropdown.MenuItem
                  onClick={() => {
                    setColorMode('dark');
                  }}>
                  Dark mode
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setColorMode('light');
                  }}>
                  Light mode
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setColorMode('system');
                  }}>
                  System mode
                </Dropdown.MenuItem>
              </Dropdown.Menu>
            </Dropdown.Wrapper>
          </Dropdown>
        </Navbar.Group>
      </Navbar>

      <Content ref={contentRef}>
        <NavSide data-id="navside">
          <NavSide.Group>
            <NavSide.Heading variation="h2" size="M">
              Guide
            </NavSide.Heading>
            <NavSide.Link to="introduction">Introduction</NavSide.Link>
            <NavSide.Link to="gettingstarted">Getting started</NavSide.Link>
            <NavSide.Link to="systemdesign">System design</NavSide.Link>
          </NavSide.Group>

          <NavSide.Group>
            <NavSide.Heading variation="h2" size="M">
              Interface
            </NavSide.Heading>

            <NavSide.Link to="pagelayouts">Page Layouts</NavSide.Link>
            <NavSide.Link to="page">Adding pages</NavSide.Link>
            <NavSide.Link to="forms">Handling forms</NavSide.Link>
          </NavSide.Group>

          <NavSide.Group>
            <NavSide.Heading variation="h2" size="M">
              Components
            </NavSide.Heading>
            <NavSide.Link to="navbar">Navbar</NavSide.Link>
            <NavSide.Link to="navside">NavSide</NavSide.Link>
            <NavSide.Link to="onthispage">On this page</NavSide.Link>
            <NavSide.Link to="layout">Layout</NavSide.Link>
            <NavSide.Link to="heading">Heading</NavSide.Link>
            <NavSide.Link to="text">Text</NavSide.Link>
            <NavSide.Link to="icon">Icon</NavSide.Link>
            <NavSide.Link to="button">Button</NavSide.Link>
            <NavSide.Link to="input">Input</NavSide.Link>
            <NavSide.Link to="select">Select</NavSide.Link>
            <NavSide.Link to="accordion">Accordion</NavSide.Link>
            <NavSide.Link to="radiobutton">RadioButton</NavSide.Link>
            <NavSide.Link to="radiobuttongroup">RadioButton Group</NavSide.Link>
            <NavSide.Link to="checkbox">Checkbox</NavSide.Link>
            <NavSide.Link to="checkboxgroup">Checkbox Group</NavSide.Link>
            <NavSide.Link to="counter">Counter</NavSide.Link>
            <NavSide.Link to="togglebutton">Toggle Button</NavSide.Link>
            <NavSide.Link to="toggleswitch">Toggle Switch</NavSide.Link>
            <NavSide.Link to="snackbar">Snackbar</NavSide.Link>
            <NavSide.Link to="slider">Slider</NavSide.Link>
            <NavSide.Link to="slidermultirange">Slider (Multirange)</NavSide.Link>
            <NavSide.Link to="divider">Divider</NavSide.Link>
            <NavSide.Link to="list">List</NavSide.Link>
            <NavSide.Link to="table">Table</NavSide.Link>
            <NavSide.Link to="card">Card</NavSide.Link>
            <NavSide.Link to="tree">Tree</NavSide.Link>
            <NavSide.Link to="progressloader">Progress Loader</NavSide.Link>
            <NavSide.Link to="spinner">Spinner</NavSide.Link>
            <NavSide.Link to="dropdown">Dropdown</NavSide.Link>
            <NavSide.Link to="tabs">Tabs</NavSide.Link>
            <NavSide.Link to="pagination">Pagination</NavSide.Link>
            <NavSide.Link to="modal">Modal</NavSide.Link>
            <NavSide.Link to="breadcrumbs">Breadcrumbs</NavSide.Link>
          </NavSide.Group>

          <NavSide.Group>
            <NavSide.Heading variation="h2" size="M">
              Utility
            </NavSide.Heading>
            <NavSide.Link to="resizepanel">Resize panel</NavSide.Link>
            <NavSide.Link to="dimensions">Dimensions</NavSide.Link>
            <NavSide.Link to="codeblock">CodeBlock</NavSide.Link>
          </NavSide.Group>
        </NavSide>

        <Container isOpen={isOpen} ref={containerRef}>
          <main id="main" ref={mainRef}>
            <Outlet />
          </main>
          <OnThisPageContextProvider>
            <OnThisPage data-id="onthispage" />
          </OnThisPageContextProvider>
        </Container>
      </Content>
    </HomeLayoutContainer>
  );
};
