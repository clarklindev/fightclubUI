import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useSideMenu } from '../context/SidemenuContext';
import { NavTop, NavSide, NavOnThisPage } from '../components';

const HomeLayoutContainer = styled.div<{ isOpen: boolean }>`
  height: 100dvh;

  display: grid;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-columns: auto;
  grid-template-rows: 50px auto;

  grid-template-areas:
    'header'
    'container';

  @media (min-width: 1200px) {
    position: relative;
  }

  .container {
    grid-area: container;
    display: grid;
    grid-template-columns: auto;
    grid-template-areas: 'fullwidthwrapper';
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;

    @media (min-width: 640px) {
      max-width: 100%; //override tailwinds presets
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 300px auto;
    }
    @media (min-width: 1024px) {
      grid-template-areas: 'navside fullwidthwrapper';
      grid-template-columns: 300px auto;
    }
    @media (min-width: 1200px) {
    }
  }

  .full-width-wrapper {
    grid-area: fullwidthwrapper;
    display: grid;
    position: relative;
    height: calc(100dvh - 50px);
    overflow-y: scroll;

    grid-template-areas: 'main';
    grid-template-columns: auto;

    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
      grid-template-areas: 'main onthispage';
      grid-template-columns: auto 300px;
    }
  }

  main {
    position: relative;
    background: transparent;
    grid-area: main;
    padding: 1rem 2rem;

    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
    @media (min-width: 1200px) {
    }
  }
`;

export const HomeLayout = () => {
  const { isOpen } = useSideMenu();

  return (
    <HomeLayoutContainer isOpen={isOpen}>
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
