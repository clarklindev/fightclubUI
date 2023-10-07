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
    overflow-x: hidden;
    overflow-y: hidden;

    @media (min-width: 640px) {
      max-width: 100%;
    }

    display: grid;
    grid-template-areas: 'fullwidthwrapper';
    grid-template-columns: auto;

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
    overflow-y: scroll;
    overflow-x: hidden;
    display: unset;
    border: 1px solid red;

    @media (min-width: 768px) {
      grid-template-areas: 'main';
      grid-template-columns: 1fr;
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
      grid-template-areas: 'main onthispage';
      grid-template-columns: 1fr 300px;
    }
  }

  main {
    grid-area: main;
    position: relative;
    padding: 1rem 2rem;

    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
    @media (min-width: 1200px) {
    }
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

          <NavOnThisPage />
        </div>
      </div>
    </HomeLayoutContainer>
  );
};
