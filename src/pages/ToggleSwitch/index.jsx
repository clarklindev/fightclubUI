import React, { useState } from 'react';
import { ToggleSwitch, Heading } from 'swagfingerui';

const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  // ----------------------------------------------------------------

  return (
    <>
      <Heading variation="h4">Toggle Switch</Heading>
      <ToggleSwitch
        savedData={savedData}
        color="grey"
        onChange={event => {
          setSavedData(event.target.checked);
        }}
      />
    </>
  );
};

export default ToggleSwitchExample;
