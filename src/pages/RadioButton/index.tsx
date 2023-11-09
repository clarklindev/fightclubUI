import { useState } from 'react';

import { RadioButton, Heading, ResizePanel } from '@swagfinger/components';

const RadioButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation="h4">RadioButton</Heading>
      <ResizePanel>
        <RadioButton
          checked={savedData}
          name="radio"
          label="label"
          iconSize="20px"
          onChange={event => {
            setSavedData(event.target.checked);
          }}
        />
      </ResizePanel>
    </>
  );
};

export default RadioButtonExample;
