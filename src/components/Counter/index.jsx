import React from 'react';
import styled from 'styled-components';

import Input from '../Input';
import MinusSmallIcon from '../../icons/MinusSmallIcon';
import PlusSmallIcon from '../../icons/PlusSmallIcon';
import Button from '../Button';
import Icon from '../Icon';

const CounterContainer = styled.div`
  display: flex;
  width: 120px;

  height: ${({ theme }) => theme?.Counter?.height};
  gap: 10px;

  Button {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme?.Counter?.backgroundColor};
  }
  Input {
    background: ${({ theme }) => theme?.Counter?.backgroundColor};
    height: auto;
  }
`;

const Counter = ({ savedData, onChange }) => {
  const decrement = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('decrement');
    onChange(parseInt(savedData || 0) - 1);
  };

  const increment = (event) => {
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
        variation='icon'
        modifiers={['noborder']}
      >
        <Icon size='25px' stroke='black' fill='black'>
          <MinusSmallIcon />
        </Icon>
      </Button>

      <Input
        placeholder=''
        onChange={(event) => !isNaN(event.target.value)}
        modifiers={['nonselectable', 'textcenter', 'nopadding']}
        savedData={savedData}
      />

      <Button
        className={['Button', 'right'].join(' ')}
        onClick={increment}
        variation='icon'
        modifiers={['noborder']}
      >
        <Icon size='25px' stroke='black' fill='black'>
          <PlusSmallIcon />
        </Icon>
      </Button>
    </CounterContainer>
  );
};

export default Counter;
