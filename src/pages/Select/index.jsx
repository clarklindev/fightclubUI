import React, { useState } from 'react';
import { Select, Heading } from '../../components';

const SelectExample = () => {
  const [savedData, setSavedData] = useState();

  const data = [
    { value: 'option0', text: 'Select an option' },
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
  ];

  return (
    <>
      <Heading variation="h4">Select</Heading>
      <Select
        savedData={savedData}
        onChange={event => setSavedData(event.target.value)}>
        {data.map((each, index) => (
          <option key={index} value={each.value}>
            {each.text}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SelectExample;
