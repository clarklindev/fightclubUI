import React, { useRef, useEffect, useState } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar, MenuSide, Heading, CustomNavLink, Button, Icon, Dropdown, OnThisPage } from '../components';
import { MenuIcon, CloseIcon } from '../icons';
import { useMenu } from '../context/MenuContext';
import logo from '../assets/logo.svg';
import githubIcon from '../assets/github.svg';

const HomeLayoutContainer = styled.div<{ isOpen: boolean; className?: string }>`
  position: relative;
  height: 100dvh;

  ${({ isOpen }) => isOpen && `overflow: unset`}};

  @media (min-width: 768px) {
    overflow: unset;
    display:unset;

  }

  .navbar {
    grid-area: navbar;
    z-index: 15;
    position: sticky;
    top: 0;
  }
`;

const Content = styled.div<{ isOpen: boolean; className?: string }>`
  margin: 0 auto;
  background: pink;
  grid-area: content;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas: 'navside container';
    grid-template-columns: 250px 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-areas: 'navside container onthispage';
    grid-template-columns: 400px 1fr 400px;
  }

  @media (min-width: 2400px) {
    max-width: 2400px;
  }

  .container {
    ${({ isOpen }) => isOpen && `display: none`};
    top: 50px;
    grid-area: container;
    background: purple;
    min-height: calc(100vh - 50px);
    overflow: hidden;

    // this needs to be here.. to reset tailwind
    @media (min-width: 640px) {
      max-width: 100%;
    }
    @media (min-width: 768px) {
      overflow: hidden;
      display: block;
    }
  }

  main {
    white-space: normal;
    padding: 1rem 2rem;
    overflow-wrap: break-word;
    @media (min-width: 768px) {
      padding: 2rem 2rem;
    }

    @media (min-width: 1024px) {
      padding: 2rem 4rem;
    }
  }

  .navside {
    position: relative;
    grid-area: navside;
    background: cyan;
    padding: 2rem 2rem 2rem 2rem;
    overflow: hidden;

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
      nav a {
        // padding: 10px 10px 10px 0px;
      }
    }
    @media (min-width: 768px) {
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
    background: rgba(0, 0, 255, 0.5);
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

export const HomeLayout = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState<number>();
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  const navigate = useNavigate();

  const handleResize = () => {
    if (contentRef.current) {
      const rect = contentRef.current?.getBoundingClientRect();

      console.log('here: ', rect.width);
      setContentWidth(rect.width);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HomeLayoutContainer isOpen={isOpen}>
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
            <Dropdown.DropdownTrigger>hi</Dropdown.DropdownTrigger>
            <Dropdown.DropdownMenu>
              <Dropdown.DropdownMenuItem>
                <CustomNavLink to="labelsomething">Dark mode</CustomNavLink>
              </Dropdown.DropdownMenuItem>
              <Dropdown.DropdownMenuItem>
                <CustomNavLink to="labelsomething">Light mode</CustomNavLink>
              </Dropdown.DropdownMenuItem>
              <Dropdown.DropdownMenuItem>
                <CustomNavLink to="labelsomething">System mode</CustomNavLink>
              </Dropdown.DropdownMenuItem>
            </Dropdown.DropdownMenu>
          </Dropdown>
        </Navbar.Group>
      </Navbar>

      <Content ref={contentRef} isOpen={isOpen}>
        <MenuSide className="navside" isOpen={isOpen}>
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
          <CustomNavLink to="labelsomething">LabelSomething</CustomNavLink>
          <CustomNavLink to="resizepanel">Resize panel</CustomNavLink>
          <CustomNavLink to="dimensions">Dimensions</CustomNavLink>
          <CustomNavLink to="hooks">Hooks</CustomNavLink>
          <CustomNavLink to="codeblock">CodeBlock</CustomNavLink>
        </MenuSide>

        <div className="container">
          <main id="main">
            <Outlet />
          </main>
        </div>

        <OnThisPage className="onthispage">B</OnThisPage>
      </Content>
    </HomeLayoutContainer>
  );
};
