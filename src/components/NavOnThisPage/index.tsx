import styled from 'styled-components';

export const NavOnThisPageContainer = styled.aside`
  display: none;

  grid-area: onthispage;
  border: 1px solid purple;

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const NavOnThisPage = () => {
  return <NavOnThisPageContainer></NavOnThisPageContainer>;
};
