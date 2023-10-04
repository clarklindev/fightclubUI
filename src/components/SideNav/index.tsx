import styled from 'styled-components';

import { useSideMenu } from '../../context/SidemenuContext';
import { Heading, CustomNavLink } from '..';

const SideNavigation = styled.aside<{ isOpen: boolean }>`
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

export const SideNav = () => {
  const { isOpen } = useSideMenu();

  return (
    <SideNavigation isOpen={isOpen}>
      <nav>
        <Heading variation="h6">Guide</Heading>
        <CustomNavLink to="gettingstarted">Getting started</CustomNavLink>
        <CustomNavLink to="systemdesign">System design</CustomNavLink>
        <br />
        {/* utility helper components */}
        <Heading variation="h6">Utility</Heading>
        <CustomNavLink to="labelsomething">LabelSomething</CustomNavLink>
        <CustomNavLink to="resizepanel">Resize panel</CustomNavLink>
        <CustomNavLink to="dimensions">Dimensions</CustomNavLink>
        <CustomNavLink to="hooks">Hooks</CustomNavLink>
        <CustomNavLink to="codeblock">CodeBlock</CustomNavLink>
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
    </SideNavigation>
  );
};
