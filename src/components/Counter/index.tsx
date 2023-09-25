import React from 'react';
import styled from 'styled-components';

import { Input, Button, Icon } from '../..';
import { MinusSmallIcon, PlusSmallIcon } from '../../icons';

type CounterProps = {
  savedData: number;
  onChange: (prop: number) => void;
};

export const Counter: React.FC<CounterProps> = ({ savedData, onChange }) => {
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
        className="pointer-events-none text-center p-0"
        onChange={event => event.target.value}
        savedData={savedData.toString()}
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
