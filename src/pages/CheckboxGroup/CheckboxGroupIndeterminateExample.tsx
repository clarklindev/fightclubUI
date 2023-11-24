import { useState } from 'react';

import { CheckboxGroup, Checkbox, Label } from '@swagfinger/components';

const CheckboxGroupIndeterminateExample = () => {
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
    <div className="flex flex-col justify-items-start items-start space-y-10">
      <Label label="hi" labelDirection="right" gap="10px">
        <Checkbox
          checked={savedData.every(item => item === true)}
          indeterminate={!savedData.every(item => item === true) && savedData.some(item => item === true)}
          name="checkbox"
          onChange={event => {
            //update group
            updateSavedData(savedData.slice().fill(event.target.checked));
          }}
        />
      </Label>

      <CheckboxGroup direction="column" spacing="20px">
        {options.map((each, index) => {
          return (
            <Label key={'CheckboxGroup_Checkbox' + index} label={each.label} labelDirection="right" gap="10px">
              <Checkbox
                checked={savedData[index]}
                name="Checkbox_ABC"
                onChange={() => onChange(index, !savedData[index])}
              />
            </Label>
          );
        })}
      </CheckboxGroup>
    </div>
  );
};

export default CheckboxGroupIndeterminateExample;
