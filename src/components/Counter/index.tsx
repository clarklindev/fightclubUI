import React from 'react';

import { Input, Button, Icon } from '@swagfinger/components';
import { MinusIcon, PlusIcon } from '@swagfinger/icons';

type CounterProps = {
  savedData: number;
  onChange: (prop: number) => void;
};

const CounterWrapper = () => {};

const CounterButton = () => {};

const Counter = ({ savedData, onChange }: CounterProps) => {
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
    <div className="flex w-[120px] gap-2.5 h-[30px]" data-component={Counter.displayName}>
      <Button className={['Button', 'left'].join(' ')} onClick={decrement} intent="icon">
        <Icon size="L">
          <MinusIcon />
        </Icon>
      </Button>

      <Input
        placeholder=""
        className="pointer-events-none text-center p-0 w-12 h-auto"
        onChange={event => event.target.value}
        value={savedData.toString()}
      />

      <Button className={['Button', 'right', 'flex', 'items-center'].join(' ')} onClick={increment} intent="icon">
        <Icon size="L">
          <PlusIcon />
        </Icon>
      </Button>
    </div>
  );
};

Counter.displayName = 'Counter';
export { Counter };
