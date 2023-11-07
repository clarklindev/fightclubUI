import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Heading, Button } from '..';

import styled from 'styled-components';

const StyledOnThisPage = styled.aside`
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  display: none;
  overflow-y: auto;

  @media (min-width: 1200px) {
    display: block;
    position: fixed;
    padding: 2rem;
    width: 400px;
  }
`;

export const OnThisPage = ({ className, ...rest }: { className?: string }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const main = document.querySelector('main');

  const [observables, setObservables] = useState<Element[] | null>(null);

  useEffect(() => {
    let observableDom: Array<Element>;
    if (main) {
      observableDom = Array.from(main.querySelectorAll('.observable'));
      setObservables(observableDom);
    }
  }, [currentPath]);

  return (
    <StyledOnThisPage className={className} {...rest}>
      <Heading variation="h2">On this page</Heading>
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
    </StyledOnThisPage>
  );
};
