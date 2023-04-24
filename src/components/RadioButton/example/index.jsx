import React, { useState } from 'react';
import RadioButton from '../index';
import Heading from '../../Heading';

const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation='h4'>RadioButton</Heading>
      <RadioButton
        checked={savedData}
        name='radio'
        label='label'
        iconSize='20px'
        onChange={(event) => {
          setSavedData(event.target.checked);
        }}
      />
    </>
  );
};

export default RadioButtonExample;
