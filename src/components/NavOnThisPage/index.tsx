import styled from 'styled-components';

interface NavOnThisPageProps {
  className?: string;
}

const NavOnThisPageContainer = styled.aside<{ className?: string }>`
  @media (min-width: 1200px) {
    border-left: var(--border);
  }
`;

export const NavOnThisPage = (props: NavOnThisPageProps) => {
  const { className } = props;

  return <NavOnThisPageContainer className={className}>On this page</NavOnThisPageContainer>;
};
