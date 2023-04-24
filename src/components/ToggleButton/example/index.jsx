import React, { useState } from 'react';
import ToggleButton from '../index';
import HeartIcon from '../../../icons/HeartIcon';
import Icon from '../../Icon';

import Heading from '../../Heading';

const ToggleButtonExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation='h4'>Toggle Button</Heading>
      <ToggleButton
        checked={savedData}
        onChange={(event) => {
          setSavedData(event.target.checked);
        }}
      >
        <Icon
          size='25px'
          fill={savedData ? 'red' : 'black'}
          fillOpacity={savedData ? '1' : '0'}
          stroke={savedData ? 'transparent' : 'black'}
        >
          <HeartIcon />
        </Icon>
      </ToggleButton>
    </>
  );
};

export default ToggleButtonExample;
