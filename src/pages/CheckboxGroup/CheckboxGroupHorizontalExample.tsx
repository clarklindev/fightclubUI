import { useState } from 'react';

import { CheckboxGroup, Checkbox, LabelSomething } from '@swagfinger/components';

const CheckboxGroupHorizontalExample = () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
  ];

  const [savedData, updateSavedData] = useState(Array(options.length).fill(false));

  const onChange = (index: number, newValue: boolean) => {
    const newValues = [...savedData];
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <CheckboxGroup direction="row" spacing="20px">
      {options.map((each, index) => {
        return (
          <LabelSomething
            key={'CheckboxGroup_Checkbox' + index}
            label={each.label}
            labelDirection="bottom"
            gap="10px"
            something={
              <Checkbox
                checked={savedData[index]}
                name="Checkbox_ABC"
                onChange={() => onChange(index, !savedData[index])}
              />
            }
          />
        );
      })}
    </CheckboxGroup>
  );
};

export default CheckboxGroupHorizontalExample;
