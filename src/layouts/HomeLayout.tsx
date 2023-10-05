import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { NavTop, NavSide, NavOnThePage } from '../components';

const HomeLayoutContainer = styled.div`
  height: 100dvh;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'header'
    'container';

  .container {
    background: transparent;
    grid-area: container;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'main';
    max-width: 100%;
    position: relative;
    @media (min-width: 768px) {
      grid-template-columns: 250px auto;
      grid-template-areas: 'nav main';
    }
    @media (min-width: 1024px) {
      grid-template-columns: 300px auto;
      grid-template-areas: 'nav main';
    }
    @media (min-width: 1200px) {
      grid-template-columns: 300px auto 300px;
      grid-template-areas: 'nav main onthispage';
      padding: 0 4rem;
    }
  }

  main {
    position: relative;
    background: transparent;
    grid-area: main;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    overflow-x: hidden;
    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }
  }
`;

export const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
      <NavTop />

      <div className="container">
        <NavSide />

        <main id="main">
          <Outlet />
        </main>

        <NavOnThePage />
      </div>
    </HomeLayoutContainer>
  );
};
