import React, { useState, useEffect, useMemo, useRef, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Heading, Button } from '..';

import { useOnThisPage } from '@swagfinger/context/OnThisPageContext';
import scrollToPercentage from '@swagfinger/utils/scrollToPercentage';
import styled from 'styled-components';

const StyledOnThisPage = styled.aside`
  display: none;
  overflow-y: hidden;

  @media (min-width: 1200px) {
    display: block;
    position: fixed;
    padding: 2rem;
    width: 400px;
  }
`;

const StyledContainer = styled.div`
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 5px;
  height: calc(100dvh - 100px - 5rem);
  width: 80%;
  overflow: hidden;

  &:hover {
    overflow-y: auto;
  }
`;

export const OnThisPage = ({ className, ...rest }: { className?: string }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const main = document.querySelector('main');
  const { scrollPercentage } = useOnThisPage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [observables, setObservables] = useState<Element[] | null>(null);

  useEffect(() => {
    let observableDom: Array<Element>;
    if (main) {
      observableDom = Array.from(main.querySelectorAll('.observable'));
      setObservables(observableDom);
    }
  }, [currentPath]);

  useEffect(() => {
    console.log('scrollPercentage: ', scrollPercentage);
    scrollToPercentage(containerRef, scrollPercentage as number);
  }, [scrollPercentage]);

  return (
    <StyledOnThisPage className={className} {...rest}>
      <Heading variation="h2" className="pb-3 px-6">
        On this page
      </Heading>
      <Container ref={containerRef}>
        {observables && observables.length > 0 ? (
          <div className="flex flex-col">
            {observables.map((observable, index) => (
              <Button intent="plain" padding="small" key={index}>
                {observable.innerHTML}
              </Button>
            ))}
          </div>
        ) : (
          <p>No observables found.</p>
        )}
      </Container>
    </StyledOnThisPage>
  );
};

const Container = forwardRef<HTMLDivElement, { children?: React.ReactNode }>(({ children, ...props }, ref) => {
  return (
    <StyledContainer {...props} ref={ref}>
      {children}
    </StyledContainer>
  );
});
