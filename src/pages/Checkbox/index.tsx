import { useState } from 'react';

import { Checkbox, LabelSomething, Heading } from '../../components';

const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <>
      <Heading variation="h4">Checkbox</Heading>
      <LabelSomething
        label="label"
        labelDirection="right"
        gap="10px"
        something={
          <Checkbox
            checked={savedData}
            name="checkbox"
            onChange={event => {
              setSavedData(event.target.checked);
            }}
          />
        }
      />
    </>
  );
};

export default CheckboxExample;
