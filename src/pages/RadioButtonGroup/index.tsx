// //RadioButtonGroup
import { useState } from 'react';

import { Layout, Heading, Tabs, CodeBlock, RadioButton, Label, Text } from '@/components';

import Code from './code.mdx';

const RadioButtonGroupExample = () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
    { label: 'D', value: 'd' },
  ];

  const [savedDataA, updateSavedDataA] = useState(Array(options.length).fill(false));
  const [savedDataB, updateSavedDataB] = useState(Array(options.length).fill(false));

  const onChange = (savedData: Array<boolean>, updateSavedData: Function, index: number) => {
    let newValues = [...savedData].fill(false);
    newValues[index] = true;
    updateSavedData(newValues);
  };

  const preview = (
    <>
      <Layout>
        <Heading as="h5">RadioButton Group (horizontal)</Heading>

        <div className="flex flex-row space-x-5">
          {options.map((each, index) => {
            return (
              <Label key={'RadioButtonGroupA' + index} label={each.label} labelDirection="bottom">
                <RadioButton
                  checked={savedDataA[index]}
                  name="RadioA"
                  size="XL"
                  onChange={() => onChange(savedDataA, updateSavedDataA, index)}
                />
              </Label>
            );
          })}
        </div>
      </Layout>
      <br />

      <Layout>
        <Heading as="h5">RadioButton Group (vertical)</Heading>

        <div className="flex flex-col space-y-5">
          {options.map((each, index) => {
            return (
              <Label key={'RadioButtonGroupB' + index} label={each.label} labelDirection="right">
                <RadioButton
                  checked={savedDataB[index]}
                  name="RadioB"
                  size="XL"
                  onChange={() => onChange(savedDataB, updateSavedDataB, index)}
                />
              </Label>
            );
          })}
        </div>
      </Layout>
    </>
  );

  return (
    <>
      <Heading as="h1" data-observable="true">
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
            <CodeBlock>
              <Code />
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default RadioButtonGroupExample;
