import styled from 'styled-components';

export const NavOnThisPageContainer = styled.aside`
  height: calc(100dvh - 50px);
  grid-area: onthispage;
  display: none;

  @media (min-width: 1200px) {
    background: transparent;
    position: fixed;
    overflow: hidden;
    &:hover {
      overflow-y: auto;
    }
    padding: 2rem;
    display: block;
    right: 4rem;
    min-width: 300px;
    border-left: var(--border);
  }
`;

export const NavOnThisPage = () => {
  return <NavOnThisPageContainer></NavOnThisPageContainer>;
};
