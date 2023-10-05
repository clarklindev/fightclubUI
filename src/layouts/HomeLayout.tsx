import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useSideMenu } from '../context/SidemenuContext';
import { NavTop, NavSide, NavOnThisPage } from '../components';

const HomeLayoutContainer = styled.div<{ isOpen: boolean }>`
  height: 100dvh;
  width: 100%;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 50px auto;

  grid-template-areas:
    'header'
    'container';

  .container {
    grid-area: container;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'main';
    max-width: 100%;
    position: relative;

    @media (min-width: 768px) {
      display: grid;
      grid-template-areas: 'navside main';
      grid-template-columns: 250px auto;
    }
    @media (min-width: 1024px) {
      grid-template-areas: 'navside main';
      grid-template-columns: 300px auto;
    }
    @media (min-width: 1200px) {
      grid-template-areas: 'navside main onthispage';
      grid-template-columns: 300px auto 300px;
      padding: 0 4rem;
    }
  }

  main {
    display: grid;

    position: relative;
    background: transparent;
    grid-area: main;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    overflow-y: auto;
    @media only screen and (max-width: 768px) {
      ${({ isOpen }) => isOpen && `display: none;`};
    }

    @media (min-width: 768px) {
      padding: 2rem 4rem;
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

        <main id="main">
          <Outlet />
        </main>

        <NavOnThisPage />
      </div>
    </HomeLayoutContainer>
  );
};
