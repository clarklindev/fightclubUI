import React from 'react';
import styled from 'styled-components';

import { Input, Button, Icon } from '../';
import { MinusSmallIcon, PlusSmallIcon } from '../../icons';

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

export const Counter = ({ savedData, onChange }) => {
  const decrement = event => {
    event.preventDefault();
    event.stopPropagation();
    console.log('decrement');
    onChange(parseInt(savedData || 0) - 1);
  };

  const increment = event => {
    event.preventDefault();
    event.stopPropagation();
    console.log('increment');
    onChange(parseInt(savedData || 0) + 1);
  };

  return (
    <CounterContainer>
      <Button
        className={['Button', 'left'].join(' ')}
        onClick={decrement}
        intent="icon">
        <Icon size="25px">
          <MinusSmallIcon />
        </Icon>
      </Button>

      <Input
        placeholder=""
        className="pointer-events-none text-center p-0"
        onChange={event => !isNaN(event.target.value)}
        savedData={savedData}
      />

      <Button
        className={['Button', 'right'].join(' ')}
        onClick={increment}
        intent="icon">
        <Icon size="25px">
          <PlusSmallIcon />
        </Icon>
      </Button>
    </CounterContainer>
  );
};
