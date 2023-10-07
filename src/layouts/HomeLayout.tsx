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
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-areas: 'main onthispage';
      grid-template-columns: 1fr 300px;
    }
  }

  .onthispage {
    grid-area: onthispage;
    display: none;
    @media (min-width: 1200px) {
      display: block;
    }
  }

  main {
    grid-area: main;

    white-space: normal;
    padding: 2rem 4rem;
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
