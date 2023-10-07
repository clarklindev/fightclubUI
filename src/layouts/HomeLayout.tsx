import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { NavTop, NavSide, NavOnThisPage } from '../components';

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
  }

  .full-width-wrapper {
    grid-area: fullwidthwrapper;
    position: relative;
    height: calc(100dvh - 50px);

    overflow-y: scroll;
    overflow-x: hidden;

    border: 1px solid red;

    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
      display: grid;
      grid-template-areas: 'main';
      grid-template-columns: auto;
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-areas: 'main onthispage';
      grid-template-columns: calc(100% - 300px) 300px;
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
      overflow-y: auto;
    }
  }

  main {
    grid-area: main;
    border: 1px solid black;

    white-space: normal;
    padding: 2rem 4rem;
    width: auto;
    overflow-wrap: break-word; /* Break long words */
  }
`;

export const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
      <NavTop />

      <div className="container">
        <NavSide />

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
