import styled from 'styled-components';

export const NavOnThisPageContainer = styled.aside`
  height: calc(100dvh - 50px);
  grid-area: onthispage;
  display: none;
  min-width: 300px;
  width: 300px;

  @media (min-width: 1200px) {
    display: block;
    position: sticky;
    top: 0;
    border-left: var(--border);
  }
`;

export const NavOnThisPage = () => {
  return <NavOnThisPageContainer></NavOnThisPageContainer>;
};
