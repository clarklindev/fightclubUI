import React from 'react';
import styled from 'styled-components';

import { Input, Button, Icon } from '@swagfinger/components';
import { MinusSmallIcon, PlusSmallIcon } from '@swagfinger/icons';

type CounterProps = {
  savedData: number;
  onChange: (prop: number) => void;
};

export const Counter = ({ savedData, onChange }: CounterProps) => {
  const decrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('decrement');
    onChange(savedData - 1);
  };

  const increment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('increment');
    onChange(savedData + 1);
  };

  return (
    <CounterContainer>
      <Button className={['Button', 'left'].join(' ')} onClick={decrement} intent="icon">
        <Icon size="20px">
          <MinusSmallIcon />
        </Icon>
      </Button>

      <Input
        placeholder=""
        className="pointer-events-none text-center p-0 w-12"
        onChange={event => event.target.value}
        value={savedData.toString()}
      />

      <Button className={['Button', 'right'].join(' ')} onClick={increment} intent="icon">
        <Icon size="20px">
          <PlusSmallIcon />
        </Icon>
      </Button>
    </CounterContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const CounterContainer = styled.div`
  display: flex;
  width: 120px;

  height: ${({ theme }) => theme?.Counter?.height};
  gap: 10px;

  Button {
    display: flex;
    align-items: center;
  }
  Input {
    height: auto;
  }
`;
