import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { NavTop, NavSide, NavOnThisPage, Heading, CustomNavLink } from '../components';

const HomeLayoutContainer = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: 50px auto;

  grid-template-areas:
    'header'
    'container';

  .container {
    grid-area: container;
    position: relative;
    overflow: hidden;

    @media (min-width: 640px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 250px auto;
    }

    @media (min-width: 1024px) {
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 300px auto;
    }

    @media (min-width: 1200px) {
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 400px auto;
    }
  }

  .full-width-wrapper {
    grid-area: fullwidthwrapper;
    position: relative;
    height: calc(100dvh - 50px);

    overflow-y: scroll;
    overflow-x: hidden;

    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-areas: 'main onthispage';
      grid-template-columns: calc(100% - 400px) 400px;
    }
  }

  main {
    grid-area: main;
    white-space: normal;
    padding: 2rem 4rem;
    width: auto;

    overflow-wrap: break-word; /* Break long words */

    @media (min-width: 768px) {
    }
  }

  .onthispage {
    grid-area: onthispage;
    display: none;
    height: calc(100dvh - 50px);
    padding: 2rem;
    overflow-wrap: break-word;
    overflow-y: hidden;
    overflow-x: hidden;

    @media (min-width: 1200px) {
      display: block;
      position: sticky;
      top: 0px;
      right: 0px;
      overflow: hidden;
    }

    /* Show scrollbar on hover */
    &:hover {
      // overflow-y: auto;
    }
  }
`;

export const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
      <NavTop />

      <div className="container">
        <NavSide>
          <>
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
            <br />
            {/* utility helper components */}
            <Heading variation="h6">Utility</Heading>
            <CustomNavLink to="labelsomething">LabelSomething</CustomNavLink>
            <CustomNavLink to="resizepanel">Resize panel</CustomNavLink>
            <CustomNavLink to="dimensions">Dimensions</CustomNavLink>
            <CustomNavLink to="hooks">Hooks</CustomNavLink>
            <CustomNavLink to="codeblock">CodeBlock</CustomNavLink>
          </>
        </NavSide>

        <div className="full-width-wrapper">
          <main id="main">
            <Outlet />
          </main>

          <NavOnThisPage className="onthispage" />
        </div>
      </div>
    </HomeLayoutContainer>
  );
};
