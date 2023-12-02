import { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { CodeBlock, Heading, Layout, Tabs } from '@swagfinger/components';
import { CheckboxGroup, Checkbox, Label } from '@swagfinger/components';

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
        <Heading variation="h5">Checkbox Group (horizontal)</Heading>

        <CheckboxGroup direction="row" spacing="20px">
          {options.map((each, index) => {
            return (
              <Label key={'CheckboxGroup_Checkbox' + index} label={each.label} labelDirection="bottom" gap="10px">
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
        <Heading variation="h5">Checkbox Group (vertical)</Heading>
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
      </Layout>

      <Layout>
        <Heading variation="h5">Checkbox Group (indeterminate)</Heading>
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
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default CheckboxExample;
