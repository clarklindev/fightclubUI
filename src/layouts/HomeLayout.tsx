import { useRef, useEffect } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar, NavSide, Button, Icon, Dropdown, OnThisPage, Badge } from '@swagfinger/components';
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

  [data-component='navside'] {
    @media (min-width: 768px) {
      grid-area: navside;
    }
    height: calc(100dvh - 50px);
  }
`;

const Container = styled.div<{ isOpen: boolean; className?: string }>`
  display: ${({ isOpen }) => isOpen && `none`};

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

  [data-component='onthispage'] {
    grid-area: onthispage;

    @media (min-width: 1200px) {
      display: block;
      position: fixed;
      right: 0;
      top: 3rem;
      padding: 4rem;
      width: 400px;
    }

    @media (min-width: 2400px) {
      right: unset;
      left-margin: calc(1fr - 2400px));
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
        <Icon size="M">
          <ModeDarkIcon />
        </Icon>
      );
    case 'light':
      return (
        <Icon size="M">
          <ModeLightIcon />
        </Icon>
      );
    case 'system':
      return (
        <Icon size="M">
          <ModeSystemIcon />
        </Icon>
      );
    default:
      return;
  }
};

export const HomeLayout = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const { colorScheme, setColorScheme } = useTheme();
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
        <Navbar.Group className="header-left flex sm:flex-row justify-center w-full min-w-min gap-2 items-center md:justify-start">
          {/* this is the open/close menuSide button */}
          <div className="absolute left-[2rem] md:hidden flex content-center">
            {!isOpen ? (
              <Button className="menu-btn" intent="icon" onClick={toggleMenu}>
                <Icon size="M">
                  <MenuIcon />
                </Icon>
              </Button>
            ) : (
              <Button className="close-btn" intent="icon" onClick={toggleMenu}>
                <Icon size="M">
                  <CloseIcon />
                </Icon>
              </Button>
            )}
          </div>

          <div className="relative flex items-center">
            <Icon data-component="icon" className="min-[320px]:absolute min-[320px]:ml-[-2rem]" size="M">
              <img src={logo} alt="logo" />
            </Icon>
            <Button
              data-component="button"
              intent="plain"
              padding="none"
              className="gap-2 hidden min-[320px]:block"
              onClick={() => navigate('/')}>
              <span className="whitespace-nowrap">SWAGFINGER-UI</span>
            </Button>
          </div>
        </Navbar.Group>

        <Navbar.Group className="header-right flex-row items-center gap-4 hidden md:flex">
          <Link to="https://github.com/swagfinger/swagfinger-ui" target="_blank" aria-label="github repo">
            {/* <Icon size="L" fillOpacity="1" fill="#FFF" stroke="#FFF"> */}
            <Icon size="M">
              <img src={githubIcon} alt="github" />
            </Icon>
          </Link>

          <Dropdown>
            <Dropdown.Wrapper id="1">
              <Dropdown.Trigger asChild>
                <Button intent="icon">{setModeIcon(colorScheme)}</Button>
              </Dropdown.Trigger>
              <Dropdown.Menu className="w-40">
                <Dropdown.MenuItem
                  onClick={() => {
                    setColorScheme('dark');
                  }}>
                  Dark mode
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setColorScheme('light');
                  }}>
                  Light mode
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setColorScheme('system');
                  }}>
                  System mode
                </Dropdown.MenuItem>
              </Dropdown.Menu>
            </Dropdown.Wrapper>
          </Dropdown>
        </Navbar.Group>
      </Navbar>

      <Content ref={contentRef}>
        <NavSide data-component="navside">
          <NavSide.Group>
            <NavSide.Heading variation="h2" size="M" className="mt-0 mb-3 pt-0">
              Guide
            </NavSide.Heading>
            <NavSide.Link to="introduction">Introduction</NavSide.Link>
            <NavSide.Link to="gettingstarted">Getting started</NavSide.Link>
            <NavSide.Link to="systemdesign">System design</NavSide.Link>
          </NavSide.Group>

          <NavSide.Group>
            <NavSide.Heading variation="h2" size="M" className="mb-3">
              Components
            </NavSide.Heading>
            <NavSide.Link to="navbar">Navbar</NavSide.Link>
            <NavSide.Link to="navside">NavSide</NavSide.Link>
            <NavSide.Link to="onthispage">On this page</NavSide.Link>
            <NavSide.Link to="layout">
              Layout <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="section">
              Section <Badge>TW</Badge>
            </NavSide.Link>

            <NavSide.Link to="heading">
              Heading <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="text">
              Text <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="label">
              Label <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="icon">
              Icon <Badge>CVA</Badge>
            </NavSide.Link>
            <NavSide.Link to="button">
              Button <Badge>CVA</Badge>
            </NavSide.Link>
            <NavSide.Link to="input">
              Input <Badge>Compound</Badge> <Badge>CVA</Badge> <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="select">Select</NavSide.Link>
            <NavSide.Link to="accordion">Accordion</NavSide.Link>
            <NavSide.Link to="radiobutton">RadioButton</NavSide.Link>
            <NavSide.Link to="radiobuttongroup">RadioButton Group</NavSide.Link>
            <NavSide.Link to="checkbox">Checkbox</NavSide.Link>
            <NavSide.Link to="checkboxgroup">Checkbox Group</NavSide.Link>
            <NavSide.Link to="counter">
              Counter <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="togglebutton">Toggle Button</NavSide.Link>
            <NavSide.Link to="toggleswitch">Toggle Switch</NavSide.Link>
            <NavSide.Link to="snackbar">Snackbar</NavSide.Link>
            <NavSide.Link to="slider">Slider</NavSide.Link>
            <NavSide.Link to="slidermultirange">Slider (Multirange)</NavSide.Link>
            <NavSide.Link to="divider">
              Divider <Badge>compound</Badge>&nbsp;
              <Badge>tw</Badge>
            </NavSide.Link>
            <NavSide.Link to="list">
              List <Badge>compound</Badge> <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="table">Table</NavSide.Link>
            <NavSide.Link to="card">
              Card <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="tree">Tree</NavSide.Link>
            <NavSide.Link to="progressloader">
              Progress Loader <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="spinner">
              Spinner <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="dropdown">
              Dropdown <Badge>compound</Badge> <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="tabs">
              Tabs <Badge>compound</Badge> <Badge>TW</Badge>
            </NavSide.Link>
            <NavSide.Link to="pagination">
              Pagination <Badge className="bg-orange-500">WIP</Badge>
            </NavSide.Link>
            <NavSide.Link to="modal">
              Modal <Badge className="bg-orange-500">WIP</Badge>
            </NavSide.Link>
            <NavSide.Link to="breadcrumbs">
              Breadcrumbs <Badge className="bg-orange-500">WIP</Badge>
            </NavSide.Link>
            <NavSide.Link to="badge">
              Badge <Badge>TW</Badge>
            </NavSide.Link>
          </NavSide.Group>

          <NavSide.Group>
            <NavSide.Heading variation="h2" size="M" className="mb-3">
              Utility
            </NavSide.Heading>
            <NavSide.Link to="resizepanel">
              Resize panel <Badge className="bg-orange-500">WIP</Badge>
            </NavSide.Link>
            <NavSide.Link to="dimensions">
              Dimensions <Badge className="bg-orange-500">WIP</Badge>
            </NavSide.Link>
            <NavSide.Link to="codeblock">
              CodeBlock <Badge>TW</Badge>
            </NavSide.Link>
          </NavSide.Group>
        </NavSide>

        <Container isOpen={isOpen} ref={containerRef}>
          <main id="main" ref={mainRef}>
            <Outlet />
          </main>
          <OnThisPageContextProvider>
            <OnThisPage data-component="onthispage" />
          </OnThisPageContextProvider>
        </Container>
      </Content>
    </HomeLayoutContainer>
  );
};
