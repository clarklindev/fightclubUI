import React, { useEffect, useRef, forwardRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from '@swagfinger/components';
import { useOnThisPage } from '@swagfinger/context/OnThisPageContext';
import { useScroll } from '@swagfinger/context/ScrollContext';
import { OnThisPageContextProvider } from '@swagfinger/context/OnThisPageContext';

export const OnThisPage = ({ children, ...props }) => {
  return (
    <OnThisPageContextProvider>
      <Container {...props}>{children}</Container>
    </OnThisPageContextProvider>
  );
};

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children, ...props }: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const location = useLocation();
  const currentPage = location.pathname;

  const { observablesInView, setObservablesInView, observables, setObservables } = useOnThisPage();
  const { scrollPercentage, scrollToPercentage } = useScroll();
  const selectedItemIndex = useRef<number | null>(null);

  useEffect(() => {
    console.log('\n\n\n\n\n');
    console.log('CURRENT PAGE CHANGE');
    let observableDom: Array<HTMLElement>;
    const main = document.querySelector('main');

    if (main) {
      console.log('BEGIN----------------------------');
      observableDom = Array.from(main.querySelectorAll('[data-observable="true"]'));
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
      // Check if the selectedItemIndex is set, and set it to true in the new array
      if (selectedItemIndex.current !== null) {
        newObservablesInView[selectedItemIndex.current] = true;
        // Reset selectedItemIndex to null
        selectedItemIndex.current = null;
      } else {
        // Find the entry closest to the top within the viewport
        const firstIntersectingEntry = entries.reduce(
          (closestEntry: IntersectionObserverEntry | null, entry: IntersectionObserverEntry) => {
            if (
              entry.isIntersecting &&
              (!closestEntry || entry.boundingClientRect.top < closestEntry.boundingClientRect.top)
            ) {
              return entry;
            }
            return closestEntry;
          },
          null,
        );

        if (firstIntersectingEntry) {
          console.log('firstIntersectingEntry: ', (firstIntersectingEntry?.target as HTMLElement).textContent);
          // Try to find the entry's index in observables
          const index = observables.indexOf(firstIntersectingEntry.target as HTMLElement);

          if (index !== -1) {
            // Update the value in the new array with the most recent isIntersecting value
            newObservablesInView[index] = true;
          }
        }
      }

      if (newObservablesInView.some(value => value === true)) {
        // Set the updated array as the new state
        setObservablesInView(newObservablesInView);
      }
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    console.log('CREATE OBSERVER');
    observer = new IntersectionObserver(intersectionCallback, {
      rootMargin: '0px 0px 0px 0px',
    });
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

        if (selectedItemIndex.current) {
          selectedItemIndex.current = null;
        }
        console.log('CLEANUP END-------------------------');
      };
    }
  }, [observables]);

  useEffect(() => {
    scrollToPercentage(containerRef, scrollPercentage as number);
  }, [scrollPercentage]);

  const [calculatedHeight, setCalculatedHeight] = useState<undefined | string>();

  useEffect(() => {
    setCalculatedHeight(`calc(100vh - 50px - 8rem)`); //minus navbar height, //minus padding * 2
  }, []);

  return (
    <div className={[`hidden`, `overflow-y-hidden`, ` border-l border-[var(--border-color)]`].join(' ')} {...props}>
      <div
        data-component="Container"
        ref={containerRef}
        className={[
          `p-4 radius-full overflow-hidden border border-[var(--border-color)] overscroll-contain hover:overflow-y-hidden`,
        ].join(' ')}
        style={{ height: calculatedHeight }}>
        {observables && observables.length > 0 ? (
          <div className="flex flex-col relative">
            {observables.map((observable, index) => (
              <Button
                intent="plain"
                padding="p-1"
                focus="none"
                key={index}
                className={[
                  'truncate',
                  'flex',
                  'content-start',
                  `${
                    observablesInView && observablesInView[index]
                      ? [
                          'before:absolute',
                          'before:w-[2px]',
                          'before:h-6',
                          'before:bg-red-500',
                          'before:ml-[-16px]',
                          "before:content-''",
                        ].join(' ')
                      : ''
                  }`,
                ].join(' ')}
                onClick={e => {
                  e.preventDefault();
                  selectedItemIndex.current = index;
                  const offset = -50;
                  const targetPosition =
                    index === 0 ? 0 : observable.getBoundingClientRect().top + window.scrollY + offset;
                  window.scrollTo({ top: targetPosition, behavior: 'instant' });
                }}>
                {observable.textContent}
              </Button>
            ))}
          </div>
        ) : (
          <p>No observables found.</p>
        )}
      </div>
    </div>
  );
};
