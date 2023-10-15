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
      max-width: reset;

      display: grid;
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 250px calc(100% - 250px);
    }

    @media (min-width: 1024px) {
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 300px calc(100% - 300px);
    }

    @media (min-width: 1200px) {
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 400px calc(100% - 400px);
    }
  }

  .full-width-wrapper {
    position: relative;
    grid-area: fullwidthwrapper;
    overflow-y: scroll;

    height: calc(100dvh - 50px);

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
    background: rgba(0, 255, 0, 0.4);
    grid-area: main;
    white-space: normal;
    padding: 1rem 2rem;
    overflow-wrap: break-word;

    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
  }

  .navside {
    position: relative;
    z-index: 1;
  }

  .onthispage {
    background: rgba(0, 0, 255, 0.5);
    grid-area: onthispage;
    height: calc(100dvh - 50px);
    overflow-wrap: break-word;
    overflow-y: hidden;
    overflow-x: hidden;
    position: sticky;
    top: 0;
    display: none;

    @media (min-width: 1200px) {
      box-sizing: border-box;
      width: 400px;
      display: block;
      padding: 2rem 4rem;
    }
  }
`;

export const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
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
          </>
        </NavSide>

        <div className="full-width-wrapper">
          <main id="main">
            <Outlet />
          </main>
          <NavOnThisPage className="onthispage" />
        </div>
      </div>

      <NavTop />
    </HomeLayoutContainer>
  );
};
