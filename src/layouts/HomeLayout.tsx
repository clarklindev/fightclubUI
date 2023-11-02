import React, { useRef, useLayoutEffect, useEffect, useState, RefObject } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar, MenuSide, Heading, CustomNavLink, Button, Icon, Dropdown, OnThisPage, Divider } from '../components';
import { MenuIcon, CloseIcon, ModeDarkIcon, ModeLightIcon, ModeSystemIcon } from '../icons';
import { useMenu } from '../context/MenuContext';
import logo from '../assets/logo.svg';
import githubIcon from '../assets/github.svg';
import { useTheme } from '../context/ThemeContext';

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

  .gutter {
    grid-area: gutter;
    background: rgba(255, 0, 0, 0.1);
  }

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
    grid-template-areas: 'navside container onthispage';
    grid-template-columns: 400px minmax(0, 1fr) 400px;
  }
`;

const Container = styled.div<{ isOpen: boolean; className?: string }>`
  ${({ isOpen }) => isOpen && `display: none`};

  grid-area: container;
  // background: yellow;

  @media (min-width: 640px) {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    display: block;
  }

  main {
    white-space: normal;
    padding: 2rem;
    overflow-wrap: break-word;
    @media (min-width: 768px) {
      padding: 2rem;
    }

    @media (min-width: 1024px) {
      padding: 2rem 4rem;
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
  const { colorMode, setLightDarkSystemMode } = useTheme();
  const navigate = useNavigate();

  const contentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const renderwait = async () => {
      // if (document.body.scrollHeight > window.innerHeight) {
      //   console.log('yes');
      // } else {
      //   console.log('no');
      // }
    };
    renderwait();
  });

  return (
    <HomeLayoutContainer>
      <Navbar className="navbar">
        <Navbar.Group className="header-left flex justify-center flex-row w-full min-w-min gap-2 items-center md:justify-start">
          <div className="min-[320px]:absolute left-8 md:hidden">
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
          <div className="logo">
            <Button intent="plain" padding="none" className="gap-2" onClick={() => navigate('/')}>
              <Icon className="icon" size="25px">
                <img src={logo} alt="logo" />
              </Icon>
              <span className="whitespace-nowrap max-[320px]:hidden">SWAGFINGER-UI</span>
            </Button>
          </div>
        </Navbar.Group>

        <Navbar.Group className="header-right flex-row items-center gap-4 hidden md:flex">
          <Link to="https://github.com/swagfinger/swagfinger-ui" target="_blank" aria-label="github repo">
            <Icon size="20px" fillOpacity="1" fill="#FFF" stroke="#FFF">
              <img src={githubIcon} alt="github" />
            </Icon>
          </Link>

          <Dropdown>
            <Dropdown.DropdownWrapper id="1">
              <Dropdown.DropdownTrigger asChild>
                <Button intent="icon">{setModeIcon(colorMode)}</Button>
              </Dropdown.DropdownTrigger>
              {/* <Dropdown.DropdownTrigger>{setModeIcon(colorMode)}</Dropdown.DropdownTrigger> */}
              <Dropdown.DropdownMenu className="w-40">
                <Dropdown.DropdownMenuItem
                  onClick={() => {
                    setLightDarkSystemMode('dark');
                  }}>
                  Dark mode
                </Dropdown.DropdownMenuItem>
                <Dropdown.DropdownMenuItem
                  onClick={() => {
                    setLightDarkSystemMode('light');
                  }}>
                  Light mode
                </Dropdown.DropdownMenuItem>
                <Dropdown.DropdownMenuItem
                  onClick={() => {
                    setLightDarkSystemMode('system');
                  }}>
                  System mode
                </Dropdown.DropdownMenuItem>
              </Dropdown.DropdownMenu>
            </Dropdown.DropdownWrapper>
          </Dropdown>
        </Navbar.Group>
      </Navbar>
      <Content ref={contentRef}>
        <MenuSide className="navside">
          <Heading variation="h6">Guide</Heading>
          <CustomNavLink to="introduction">Introduction</CustomNavLink>
          <CustomNavLink to="gettingstarted">Getting started</CustomNavLink>
          <CustomNavLink to="systemdesign">System design</CustomNavLink>

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
          <CustomNavLink to="divider">Divider</CustomNavLink>
          <CustomNavLink to="list">List</CustomNavLink>
          <CustomNavLink to="table">Table</CustomNavLink>
          <CustomNavLink to="card">Card</CustomNavLink>
          <CustomNavLink to="tree">Tree</CustomNavLink>
          <CustomNavLink to="progressloader">Progress Loader</CustomNavLink>
          <CustomNavLink to="spinner">Spinner</CustomNavLink>
          <CustomNavLink to="dropdown">Dropdown</CustomNavLink>
          <CustomNavLink to="tabs">Tabs</CustomNavLink>
          {/* utility helper components */}
          <Heading variation="h6">Utility</Heading>
          <CustomNavLink to="resizepanel">Resize panel</CustomNavLink>
          <CustomNavLink to="dimensions">Dimensions</CustomNavLink>
          <CustomNavLink to="codeblock">CodeBlock</CustomNavLink>
        </MenuSide>
        <Container isOpen={isOpen} ref={containerRef}>
          <main id="main">
            <Outlet />
          </main>
        </Container>
        <div className="gutter"></div>

        <OnThisPage className="onthispage">B</OnThisPage>
      </Content>
    </HomeLayoutContainer>
  );
};
