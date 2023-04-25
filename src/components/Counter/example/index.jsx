import React, { useState } from 'react';
import Counter from '../index';
import Heading from '../../Heading';

const CounterExample = () => {
  const [savedData, setSavedData] = useState('0');

  return (
    <><div className="bg-red-400 text-white p-5 rounded mb-4">work in progress (todo: text alignment)</div>
      <Heading variation='h4'>Counter</Heading>
      <Counter
        savedData={savedData}
        onChange={(newValue) => setSavedData(newValue)}
      />
    </>
  );
};

export default CounterExample;
