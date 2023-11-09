import { useState } from 'react';

import { Select, Heading, ResizePanel } from '@swagfinger/components';

const SelectExample = () => {
  const [savedData, setSavedData] = useState<string | null>();

  const data = [
    { value: 'option0', text: 'Select an option' },
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
  ];

  return (
    <>
      <Heading variation="h4">Select</Heading>
      <ResizePanel>
        <Select savedData={savedData} onChange={event => setSavedData(event.target.value)}>
          {data.map((each, index) => (
            <option key={index} value={each.value}>
              {each.text}
            </option>
          ))}
        </Select>
      </ResizePanel>
    </>
  );
};

export default SelectExample;
