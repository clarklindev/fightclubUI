import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { TopNav, SideNav } from '../components';

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

const AsideOnThePage = styled.aside`
  height: calc(100dvh - 50px);
  grid-area: onthispage;
  display: none;
  background: transparent;
  position: fixed;
  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
  padding: 2rem;

  @media (min-width: 1200px) {
    right: 4rem;
    display: block;
    border-left: var(--border);
    min-width: 300px;
  }
`;

export const HomeLayout = () => {
  return (
    <HomeLayoutContainer>
      <TopNav />

      <div className="container">
        <SideNav />

        <main id="main">
          <Outlet />
        </main>

        <AsideOnThePage />
      </div>
    </HomeLayoutContainer>
  );
};
