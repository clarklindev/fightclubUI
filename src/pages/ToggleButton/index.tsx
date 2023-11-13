import { useState } from 'react';

import { Icon, ToggleButton, Heading, ResizePanel } from '@swagfinger/components';
import { HeartIcon } from '@swagfinger/icons';

const ToggleButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Toggle Button
      </Heading>
      <ResizePanel>
        <ToggleButton
          checked={savedData}
          onChange={event => {
            setSavedData(event.target.checked);
          }}>
          <Icon
            size="25px"
            fill={savedData ? 'red' : 'black'}
            fillOpacity={savedData ? '1' : '0'}
            stroke={savedData ? 'transparent' : 'currentColor'}>
            <HeartIcon />
          </Icon>
        </ToggleButton>
      </ResizePanel>
    </>
  );
};

export default ToggleButtonExample;
