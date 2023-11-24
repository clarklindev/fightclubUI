import { useState } from 'react';

import { RadioButtonGroup, RadioButton, Label } from '@swagfinger/components';

const RadioButtonGroupVerticalExample = () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
    { label: 'D', value: 'd' },
  ];

  const [savedData, updateSavedData] = useState(Array(options.length).fill(false));

  const onChange = (index: number, newValue: boolean) => {
    let newValues = [...savedData].fill(false);
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <RadioButtonGroup direction="column" spacing="20px">
      {options.map((each, index) => {
        return (
          <Label key={'RadioButtonGroup' + index} label={each.label} labelDirection="right" gap="10px">
            <RadioButton
              checked={savedData[index]}
              name="Radio"
              iconSize="20px"
              onChange={() => onChange(index, !savedData[index])}
            />
          </Label>
        );
      })}
    </RadioButtonGroup>
  );
};

export default RadioButtonGroupVerticalExample;
