import React, { useState } from 'react';

import { CheckboxGroup, Checkbox, LabelSomething } from '../../components';

const CheckboxGroupVerticalExample = () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
  ];

  const [savedData, updateSavedData] = useState(
    Array(options.length).fill(false),
  );

  const onChange = (index, newValue) => {
    const newValues = [...savedData];
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <CheckboxGroup direction="column" spacing="20px">
      {options.map((each, index) => {
        return (
          <LabelSomething
            key={'CheckboxGroup_Checkbox' + index}
            label={each.label}
            labelPosition="right"
            gap="10px"
            something={
              <Checkbox
                checked={savedData[index]}
                name="Checkbox_ABC"
                iconSize="20px"
                onChange={() => onChange(index, !savedData[index])}
              />
            }
          />
        );
      })}
    </CheckboxGroup>
  );
};

export default CheckboxGroupVerticalExample;
