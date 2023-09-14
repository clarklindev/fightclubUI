import React, { useState } from 'react';

import { Icon, ToggleButton, Heading } from 'swagfingerui';
import HeartIcon from 'swagfingerui/icons/HeartIcon';

const ToggleButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation="h4">Toggle Button</Heading>
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
    </>
  );
};

export default ToggleButtonExample;
