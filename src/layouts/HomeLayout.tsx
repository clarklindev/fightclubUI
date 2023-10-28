import React, { useRef, useEffect, useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar, MenuSide, Heading, CustomNavLink, Button, Icon, Dropdown, OnThisPage } from '../components';
import { MenuIcon, CloseIcon } from '../icons';
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

  .navbar {
    grid-area: navbar;
    position: fixed;
    top: 0;
    z-index: 1;
    @media (min-width: 2400px) {
      max-width: 2400px;
    }
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
    grid-template-columns: 300px minmax(0, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'navside container onthispage';
    grid-template-columns: 400px minmax(0, 1fr) 400px;
  }

  .navside {
    // background: rgba(0, 255, 255, 1);
    padding: 2rem;
    top: 50px;
    overflow-wrap: break-word;

    &:hover {
      color: var(--clr-foreground);
    }
    &.active {
      color: var(--clr-foreground);
    }
    @media only screen and (max-width: 576px) {
      body {
        font-size: 1.2rem;
      }
    }
    @media (min-width: 768px) {
      grid-area: navside;
      width: 250px;
      display: block;
      position: fixed;
      padding: 2rem 2rem 2rem 2rem;
      height: calc(100dvh - 50px);
      overflow-y: scroll;
      top: 50px;
    }
    @media (min-width: 1024px) {
      width: 300px;
      padding: 2rem 2rem 2rem 4rem;
    }
    @media (min-width: 1200px) {
      width: 400px;
      padding: 2rem 2rem 2rem 6rem;
    }
  }

  .onthispage {
    grid-area: onthispage;
    // background: rgba(255, 0, 0, 0.5);
    height: calc(100dvh - 50px);
    display: none;

    @media (min-width: 1200px) {
      display: block;
      position: fixed;
      width: 400px;
      padding: 2rem 4rem;
      border-left: var(--border);
    }
  }
`;

const Container = styled.div<{ isOpen: boolean; className?: string }>`
  ${({ isOpen }) => isOpen && `display: none`};
  grid-area: container;
  // background: yellow;

  @media (min-width: 640px) {
    max-width: 100%; // NOTE: this needs to be here to reset tailwind
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

export const HomeLayout = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const { colorMode, setLightDarkSystemMode } = useTheme();
  const navigate = useNavigate();

  return (
    <HomeLayoutContainer>
      <Navbar className="navbar">
        <Navbar.Group className="header-left flex justify-center flex-row w-full min-w-min gap-2 items-center md:justify-start">
          <Navbar.Group className="min-[320px]:absolute left-8 md:hidden">
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
          </Navbar.Group>
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
            <Dropdown.DropdownWrapper>
              <Dropdown.DropdownTrigger>{colorMode}</Dropdown.DropdownTrigger>
              <Dropdown.DropdownMenu>
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
      <Content>
        <MenuSide className="navside">
          <Heading variation="h6">Guide</Heading>
          <CustomNavLink to="introduction">Introduction</CustomNavLink>
          <CustomNavLink to="gettingstarted">Getting started</CustomNavLink>
          <CustomNavLink to="systemdesign">System design</CustomNavLink>
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
          <CustomNavLink to="dropdown">Dropdown</CustomNavLink>
          <CustomNavLink to="tabs">Tabs</CustomNavLink>
          <br />
          {/* utility helper components */}
          <Heading variation="h6">Utility</Heading>
          <CustomNavLink to="resizepanel">Resize panel</CustomNavLink>
          <CustomNavLink to="dimensions">Dimensions</CustomNavLink>
          <CustomNavLink to="codeblock">CodeBlock</CustomNavLink>
        </MenuSide>

        <Container isOpen={isOpen}>
          <main id="main">
            <Outlet />
          </main>
        </Container>

        <OnThisPage className="onthispage">B</OnThisPage>
      </Content>
    </HomeLayoutContainer>
  );
};
