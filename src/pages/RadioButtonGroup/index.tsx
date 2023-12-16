// //RadioButtonGroup
import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Layout, Heading, Tabs, CodeBlock, RadioButtonGroup, RadioButton, Label } from '@swagfinger/components';

const RadioButtonGroupExample = () => {
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

  const preview = (
    <>
      <Layout>
        <Heading variation="h5" size="level2">
          RadioButton Group (horizontal)
        </Heading>
        <RadioButtonGroup direction="row" spacing="20px">
          {options.map((each, index) => {
            return (
              <Label key={'RadioButtonGroup' + index} label={each.label} labelDirection="bottom" gap="10px">
                <RadioButton
                  checked={savedData[index]}
                  name="Radio"
                  size="XL"
                  onChange={() => onChange(index, !savedData[index])}
                />
              </Label>
            );
          })}
        </RadioButtonGroup>
      </Layout>
      <Layout>
        <Heading variation="h5" size="level2">
          RadioButton Group (vertical)
        </Heading>
        <RadioButtonGroup direction="column" spacing="20px">
          {options.map((each, index) => {
            return (
              <Label key={'RadioButtonGroup' + index} label={each.label} labelDirection="right" gap="10px">
                <RadioButton
                  checked={savedData[index]}
                  name="Radio"
                  size="XL"
                  onChange={() => onChange(index, !savedData[index])}
                />
              </Label>
            );
          })}
        </RadioButtonGroup>
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
        RadioButton Group
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default RadioButtonGroupExample;
