import { useState } from 'react';

import { Checkbox, Heading } from '../../components';

const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation="h4">Checkbox</Heading>
      <Checkbox
        checked={savedData}
        name="checkbox"
        label="label"
        onChange={event => {
          setSavedData(event.target.checked);
        }}
      />
    </>
  );
};

export default CheckboxExample;
