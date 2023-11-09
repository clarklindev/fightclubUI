import React, { useEffect, useRef, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Heading, Button } from '@swagfinger/components';
import { useOnThisPage } from '@swagfinger/context/OnThisPageContext';
import { useScroll } from '@swagfinger/context/ScrollContext';

export const OnThisPage = ({ className, ...rest }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const location = useLocation();
  const currentPage = location.pathname;

  const { observablesInView, setObservablesInView, observables, setObservables } = useOnThisPage();
  const { scrollPercentage, scrollToPercentage } = useScroll();

  useEffect(() => {
    console.log('\n\n\n\n\n');
    console.log('CURRENT PAGE CHANGE');
    let observableDom: Array<HTMLElement>;
    const main = document.querySelector('main');

    if (main) {
      console.log('BEGIN----------------------------');
      observableDom = Array.from(main.querySelectorAll('.observable'));

      console.log('SET OBSERVABLES');
      setObservables(observableDom);
      setObservablesInView(new Array(observableDom.length).fill(false));

      console.log('END----------------------------');
    }
  }, [currentPage]);

  const intersectionCallback = async (entries: IntersectionObserverEntry[]): Promise<void> => {
    console.log('CALLBACK-------------------------------');

    if (observables) {
      // Create a new array with all elements set to false initially
      const newObservablesInView = new Array(observables.length).fill(false);

      // Find the first entry that is intersecting
      const firstIntersectingEntry = entries.find(entry => entry.isIntersecting);

      if (firstIntersectingEntry) {
        // Try to find the entry's index in observables
        const index = observables.indexOf(firstIntersectingEntry.target as HTMLElement);

        if (index !== -1) {
          // Update the value in the new array with the most recent isIntersecting value
          newObservablesInView[index] = true;
        }
      }

      // Ensure there's at least one true value before updating the state
      if (newObservablesInView.some(value => value === true)) {
        // Set the updated array as the new state
        setObservablesInView(newObservablesInView);
      }
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    console.log('CREATE OBSERVER');
    observer = new IntersectionObserver(intersectionCallback);
    //IntersectionObserverCallback function()

    console.log('NEW OBSERVE');
    if (observables) {
      observables.forEach(observable => {
        observer.observe(observable);
      });

      console.log('ASSIGN OBSERVER REF');
      observerRef.current = observer;

      return () => {
        console.log('CLEANUP START-------------------------');
        if (observerRef.current) {
          console.log('UNOBSERVE');
          observables.forEach(observable => {
            if (observerRef.current) {
              observerRef.current.unobserve(observable); // Use the observer from the ref
            }
          });
          console.log('DISCONNECT');
          observerRef.current.disconnect();
        }
        console.log('CLEANUP END-------------------------');
      };
    }
  }, [observables]);

  useEffect(() => {
    scrollToPercentage(containerRef, scrollPercentage as number);
  }, [scrollPercentage]);

  return (
    <StyledOnThisPage className={className} {...rest}>
      <Heading variation="h2" className="pb-3 px-8">
        On this page
      </Heading>
      <Container ref={containerRef}>
        {observables && observables.length > 0 ? (
          <div className="flex flex-col">
            {observables.map((observable, index) => (
              <Button
                intent="plain"
                padding="p-1"
                key={index}
                className={observablesInView && observablesInView[index] ? 'bg-red-500' : ''}
                onClick={e => {
                  e.preventDefault();
                  const offset = -50;
                  const targetPosition =
                    index === 0 ? 0 : observable.getBoundingClientRect().top + window.scrollY + offset;
                  window.scrollTo({ top: targetPosition, behavior: 'instant' });
                }}>
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

const StyledOnThisPage = styled.aside`
  display: none;
  overflow-y: hidden;
  border-left: 1px solid var(--border-color);
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
  width: 90%;
  margin: 0 auto;
  overflow: hidden;

  &:hover {
    overflow-y: auto;
  }
`;
