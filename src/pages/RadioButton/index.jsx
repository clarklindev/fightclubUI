import React, { useState } from 'react';

import { RadioButton, Heading } from '../../components';

const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation="h4">RadioButton</Heading>
      <RadioButton
        checked={savedData}
        name="radio"
        label="label"
        iconSize="20px"
        onChange={event => {
          setSavedData(event.target.checked);
        }}
      />
    </>
  );
};

export default RadioButtonExample;
