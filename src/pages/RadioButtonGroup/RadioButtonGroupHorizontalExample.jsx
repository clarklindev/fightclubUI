import React, { useState } from 'react';
import { RadioButtonGroup, RadioButton, LabelSomething } from 'swagfingerui';

const RadioButtonGroupHorizontalExample = () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
    { label: 'D', value: 'd' },
  ];

  const [savedData, updateSavedData] = useState(
    Array(options.length).fill(false),
  );

  const onChange = (index, newValue) => {
    let newValues = [...savedData].fill(false);
    newValues[index] = newValue;
    updateSavedData(newValues);
  };

  return (
    <RadioButtonGroup direction="row" spacing="20px">
      {options.map((each, index) => {
        return (
          <LabelSomething
            key={'RadioButtonGroup' + index}
            label={each.label}
            labelPosition="bottom"
            gap="10px"
            something={
              <RadioButton
                checked={savedData[index]}
                name="Radio"
                iconSize="20px"
                onChange={() => onChange(index, !savedData[index])}
              />
            }
          />
        );
      })}
    </RadioButtonGroup>
  );
};

export default RadioButtonGroupHorizontalExample;
