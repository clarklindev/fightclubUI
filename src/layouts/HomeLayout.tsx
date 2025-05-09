import { useRef, useEffect } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';

import { Navbar, NavSide, Button, Icon, Dropdown, OnThisPage, Badge } from '@fightclub/components';
import { MenuIcon, CloseIcon, ModeDarkIcon, ModeLightIcon, ModeSystemIcon, GithubIcon } from '@fightclub/icons';
import { useMenu } from '@fightclub/context/MenuContext';
import { useTheme } from '@fightclub/context/ThemeContext';
import { useScroll } from '@fightclub/context/ScrollContext';

import logo from '@fightclub/assets/logo.png';

const setModeIcon = (mode: string | null) => {
  if (!mode) {
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
    <div id="HomeLayoutContainer">
      <Navbar>
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

          <div className="relative flex items-center gap-4">
            <Icon data-component="icon" size="4XL">
              <img src={logo} alt="logo" />
            </Icon>
            <Button
              data-component="button"
              intent="plain"
              padding="none"
              className="gap-2 hidden min-[320px]:block"
              onClick={() => navigate('/')}>
              <span className="whitespace-nowrap">{import.meta.env.VITE_UI_ALIAS_NAME}UI</span>
            </Button>
          </div>
        </Navbar.Group>

        <Navbar.Group className="header-right flex-row items-center gap-4 hidden md:flex">
          <Link to="https://github.com/swagfinger/swagfinger-ui" target="_blank" aria-label="github repo">
            {/* <Icon size="L" fillOpacity="1" fill="#FFF" stroke="#FFF"> */}
            <Icon size="M">
              <GithubIcon className="dark:stroke-white dark:fill-white stroke-black fill-black" />
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

      <div id="Content" ref={contentRef}>
        <NavSide data-component="navside">
          <NavSide.Group>
            <NavSide.Heading as="h2" size="M" className="mt-0 mb-3 pt-0">
              Guide
            </NavSide.Heading>
            <NavSide.Link to="introduction">Introduction</NavSide.Link>
            <NavSide.Link to="gettingstarted">Getting started</NavSide.Link>
            <NavSide.Link to="systemdesign">System design</NavSide.Link>
          </NavSide.Group>

          <NavSide.Group>
            <NavSide.Heading as="h2" size="M" className="mb-3">
              Components
            </NavSide.Heading>
            <NavSide.Link to="navbar">Navbar</NavSide.Link>
            {/* <NavSide.Link to="navside">NavSide</NavSide.Link> */}
            {/* <NavSide.Link to="onthispage">OnThisPage</NavSide.Link> */}
            <NavSide.Link to="layout">Layout</NavSide.Link>
            <NavSide.Link to="section">Section</NavSide.Link>
            <NavSide.Link to="heading">Heading</NavSide.Link>
            <NavSide.Link to="text">Text</NavSide.Link>
            <NavSide.Link to="textarea">Textarea</NavSide.Link>
            <NavSide.Link to="label">Label</NavSide.Link>
            <NavSide.Link to="icon">Icon</NavSide.Link>
            <NavSide.Link to="button">Button</NavSide.Link>
            <NavSide.Link to="input">Input</NavSide.Link>
            {/* <NavSide.Link to="inputotp">Input OTP</NavSide.Link> */}
            <NavSide.Link to="popover">Popover</NavSide.Link>
            <NavSide.Link to="select">Select</NavSide.Link>
            <NavSide.Link to="accordion">Accordion</NavSide.Link>
            <NavSide.Link to="radiobutton">RadioButton</NavSide.Link>
            <NavSide.Link to="radiobuttongroup">RadioButton Group</NavSide.Link>
            <NavSide.Link to="checkbox">Checkbox</NavSide.Link>
            <NavSide.Link to="checkboxgroup">Checkbox Group</NavSide.Link>
            <NavSide.Link to="counter">Counter</NavSide.Link>
            <NavSide.Link to="togglebutton">Toggle Button</NavSide.Link>
            <NavSide.Link to="toggleswitch">Toggle Switch</NavSide.Link>
            {/* <NavSide.Link to="snackbar">Snackbar</NavSide.Link> */}
            {/* <NavSide.Link to="calendar">Calendar</NavSide.Link> */}
            {/* <NavSide.Link to="datepicker">Datepicker</NavSide.Link> */}
            <NavSide.Link to="slider">Slider</NavSide.Link>
            {/* <NavSide.Link to="slidermultirange">Slider (Multirange)</NavSide.Link> */}
            <NavSide.Link to="divider">Divider</NavSide.Link>
            <NavSide.Link to="list">List</NavSide.Link>
            <NavSide.Link to="table">Table</NavSide.Link>
            <NavSide.Link to="card">Card</NavSide.Link>
            <NavSide.Link to="tree">Tree</NavSide.Link>
            <NavSide.Link to="progressloader">Progress Loader</NavSide.Link>
            <NavSide.Link to="spinner">Spinner</NavSide.Link>
            {/* <NavSide.Link to="dropdown">Dropdown</NavSide.Link> */}
            <NavSide.Link to="tabs">Tabs</NavSide.Link>
            {/* <NavSide.Link to="pagination">Pagination</NavSide.Link> */}
            <NavSide.Link to="dialog">Dialog</NavSide.Link>
            <NavSide.Link to="breadcrumbs">Breadcrumbs</NavSide.Link>
            <NavSide.Link to="badge">Badge</NavSide.Link>
            <NavSide.Link to="avatar">Avatar</NavSide.Link>
          </NavSide.Group>

          <NavSide.Group>
            <NavSide.Heading as="h2" size="M" className="mb-3">
              Utility
            </NavSide.Heading>
            <NavSide.Link to="codeblock">CodeBlock</NavSide.Link>
          </NavSide.Group>
        </NavSide>

        <div id="Container" ref={containerRef} style={{ display: isOpen ? 'none' : undefined }}>
          <main id="main" ref={mainRef}>
            <Outlet />
          </main>
          <OnThisPage data-component="onthispage" />
        </div>
      </div>
    </div>
  );
};
