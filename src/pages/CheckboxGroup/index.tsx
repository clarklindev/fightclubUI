import { useState } from 'react';
import { CodeBlock, Heading, Layout, Tabs } from '@fightclub/components';
import { CheckboxGroup, Checkbox, Label } from '@fightclub/components';

import Code from './code.mdx';

const CheckboxExample = () => {
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

  const preview = (
    <>
      <Layout>
        <Heading variation="h5" size="level2">
          Checkbox Group (horizontal)
        </Heading>

        <CheckboxGroup direction="row" spacing="4">
          {options.map((each, index) => {
            return (
              <Label key={'CheckboxGroup_Checkbox' + index} label={each.label} labelDirection="bottom" gap="2">
                <Checkbox
                  checked={savedData[index]}
                  name="Checkbox_ABC"
                  onChange={() => onChange(index, !savedData[index])}
                />
              </Label>
            );
          })}
        </CheckboxGroup>
      </Layout>

      <Layout>
        <Heading variation="h5" size="level2">
          Checkbox Group (vertical)
        </Heading>
        <CheckboxGroup direction="column" spacing="4">
          {options.map((each, index) => {
            return (
              <Label key={'CheckboxGroup_Checkbox' + index} label={each.label} labelDirection="right" gap="2">
                <Checkbox
                  checked={savedData[index]}
                  name="Checkbox_ABC"
                  onChange={() => onChange(index, !savedData[index])}
                />
              </Label>
            );
          })}
        </CheckboxGroup>
      </Layout>

      <Layout>
        <Heading variation="h5" size="level2">
          Checkbox Group (indeterminate)
        </Heading>
        <div className="flex flex-col items-start space-y-10">
          <Label label="hi" labelDirection="right" gap="2">
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

          <CheckboxGroup direction="column" spacing="4">
            {options.map((each, index) => {
              return (
                <Label key={'CheckboxGroup_Checkbox' + index} label={each.label} labelDirection="right" gap="2">
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
      </Layout>
    </>
  );

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
        Checkbox Group
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock><Code/></CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default CheckboxExample;
