import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@fightclub/components';
import { useOnThisPage } from '@fightclub/context/OnThisPageContext';
import { useScroll } from '@fightclub/context/ScrollContext';
import { OnThisPageContextProvider } from '@fightclub/context/OnThisPageContext';

export const OnThisPage = ({ ...props }) => {
  return (
    <OnThisPageContextProvider>
      <Container {...props} />
    </OnThisPageContextProvider>
  );
};

const Container = ({ ...props }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const location = useLocation();
  const currentPage = location.pathname;

  const { observablesInView, setObservablesInView, observables, setObservables } = useOnThisPage();
  const { scrollPercentage, scrollToPercentage } = useScroll();
  const selectedItemIndex = useRef<number | null>(null);
  const lastScrollY = useRef<number>(0);  // Track scroll direction

  // Detecting the scroll direction
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  
  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScrollDirection);
    return () => window.removeEventListener('scroll', handleScrollDirection);
  }, []);

  useEffect(() => {
    let observableDom: Array<HTMLElement>;
    const main = document.querySelector('main');
    
    if (main) {
      observableDom = Array.from(main.querySelectorAll('[data-observable="true"]'));
      setObservables(observableDom);
      setObservablesInView(new Array(observableDom.length).fill(false));
    }
  }, [currentPage]);

  const intersectionCallback = async (entries: IntersectionObserverEntry[]): Promise<void> => {
    if (observables) {
      const newObservablesInView = new Array(observables.length).fill(false);

      // Check for the active element based on scroll direction
      let activeIndex: number | null = null;

      if (scrollDirection === 'down') {
        // Scroll Down: Prioritize the first intersecting observable
        const firstIntersectingEntry = entries.reduce(
          (closestEntry: IntersectionObserverEntry | null, entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && (!closestEntry || entry.boundingClientRect.top < closestEntry.boundingClientRect.top)) {
              return entry;
            }
            return closestEntry;
          },
          null,
        );

        if (firstIntersectingEntry) {
          activeIndex = observables.indexOf(firstIntersectingEntry.target as HTMLElement);
        }
      } else {
        // Scroll Up: Prioritize the last intersecting observable
        const lastIntersectingEntry = entries.reduce(
          (closestEntry: IntersectionObserverEntry | null, entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && (!closestEntry || entry.boundingClientRect.bottom > closestEntry.boundingClientRect.bottom)) {
              return entry;
            }
            return closestEntry;
          },
          null,
        );

        if (lastIntersectingEntry) {
          activeIndex = observables.indexOf(lastIntersectingEntry.target as HTMLElement);
        }
      }

      // Update observablesInView if a valid activeIndex is found
      if (activeIndex !== null) {
        newObservablesInView[activeIndex] = true;
      }

      // If any observable has moved out of view (bottom-up scroll), reset its active state
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          const index = observables.indexOf(entry.target as HTMLElement);
          if (index !== -1 && newObservablesInView[index] === true) {
            newObservablesInView[index] = false;
          }
        }
      });

      // Set the new state if the observablesInView array has changed
      if (newObservablesInView.some(value => value === true)) {
        setObservablesInView(newObservablesInView);
      }
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    observer = new IntersectionObserver(intersectionCallback, {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.5, // Trigger when 50% of an element is in view
    });

    if (observables) {
      observables.forEach(observable => {
        observer.observe(observable);
      });

      observerRef.current = observer;

      return () => {
        if (observerRef.current) {
          observables.forEach(observable => {
            observerRef.current.unobserve(observable);
          });
          observerRef.current.disconnect();
        }
      };
    }
  }, [observables]);

  useEffect(() => {
    scrollToPercentage(containerRef, scrollPercentage as number);
  }, [scrollPercentage]);

  const [calculatedHeight, setCalculatedHeight] = useState<undefined | string>();

  useEffect(() => {
    setCalculatedHeight(`calc(100vh - 50px - 8rem)`); // subtract navbar height and padding
  }, []);

  return (
    <div className="hidden overflow-y-hidden border-l border-[var(--border-color)]" {...props}>
      <div
        data-component="Container"
        ref={containerRef}
        className="p-4 radius-full overflow-hidden border border-[var(--border-color)] overscroll-contain hover:overflow-y-hidden"
        style={{ height: calculatedHeight }}
      >
        {observables && observables.length > 0 ? (
          <div className="flex flex-col relative">
            {observables.map((observable, index) => (
              <Button
                intent="plain"
                padding="none"
                key={index}
                className={`truncate flex content-start ${
                  observablesInView && observablesInView[index]
                    ? 'before:absolute before:w-[2px] before:h-6 before:bg-red-500 before:ml-[-16px] before:content-""'
                    : ''
                }`}
                onClick={e => {
                  e.preventDefault();
                  selectedItemIndex.current = index;
                  const offset = -50;
                  const targetPosition =
                    index === 0 ? 0 : observable.getBoundingClientRect().top + window.scrollY + offset;
                  window.scrollTo({ top: targetPosition, behavior: 'instant' });
                }}
              >
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
