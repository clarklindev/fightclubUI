import styled from 'styled-components';

import { useSideMenu } from '../../context/SidemenuContext';
import { Heading, CustomNavLink } from '..';

const Navigation = styled.aside<{ isOpen: boolean }>`
  nav {
    display: flex;
    flex-direction: column;
  }
  background: white;

  padding: 2rem 4rem;

  z-index: 1;

  min-width: 100%;
  display: block;
  position: fixed; //needed for mobile
  height: calc(100dvh - 50px);
  overflow: hidden;

  &:hover {
    overflow-y: auto;
  }
  ${({ isOpen }) => (isOpen ? `display: block;` : `display: none;`)};

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
    border-right: var(--border);
    overflow-y: auto;

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
    display: block;
    overflow-y: hidden;

    min-width: 300px;

    padding: 2rem 4rem;
    grid-area: navside;

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
    position: fixed;
  }
`;

export const NavSide = () => {
  const { isOpen } = useSideMenu();

  return (
    <Navigation isOpen={isOpen}>
      <nav>
        <Heading variation="h6">Guide</Heading>
        <CustomNavLink to="introduction">Introduction</CustomNavLink>
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
    </Navigation>
  );
};
