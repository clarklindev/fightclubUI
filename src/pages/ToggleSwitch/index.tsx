import { useState } from 'react';

import { ToggleSwitch, Heading, ResizePanel } from '@swagfinger/components';

const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  // ----------------------------------------------------------------

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Toggle Switch
      </Heading>
      <ResizePanel>
        <ToggleSwitch
          savedData={savedData}
          color="grey"
          onChange={event => {
            setSavedData(event.target.checked);
          }}
        />
      </ResizePanel>
    </>
  );
};

export default ToggleSwitchExample;
