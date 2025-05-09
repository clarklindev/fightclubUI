import { useState } from 'react';

import { Checkbox, Label, Layout, Heading, Tabs, CodeBlock } from '@fightclub/components';
import Code from './code.mdx';

const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  const preview = (
    <>
      <Layout>
        <Label label="label" labelDirection="right" gap="2">
          <Checkbox
            size="XL"
            checked={savedData}
            name="checkbox"
            onChange={event => {
              setSavedData(event.target.checked);
            }}
          />
        </Label>
      </Layout>
      <Layout>
        <Label label="label" labelDirection="right" gap="2">
          <Checkbox
            size="L"
            checked={savedData}
            name="checkbox"
            onChange={event => {
              setSavedData(event.target.checked);
            }}
          />
        </Label>
      </Layout>
      <Layout>
        <Label label="label" labelDirection="right" gap="2">
          <Checkbox
            size="M"
            checked={savedData}
            name="checkbox"
            onChange={event => {
              setSavedData(event.target.checked);
            }}
          />
        </Label>
      </Layout>

      <Layout>
        <Label label="label" labelDirection="right" gap="2">
          <Checkbox
            size="M"
            border={false}
            checked={savedData}
            name="checkbox"
            onChange={event => {
              setSavedData(event.target.checked);
            }}
          />
        </Label>
      </Layout>

      <Layout>
        <Checkbox
          size="M"
          border={false}
          checked={savedData}
          name="checkbox"
          onChange={event => {
            setSavedData(event.target.checked);
          }}
        />
      </Layout>
    </>
  );

  return (
    <>
      <Heading as="h1" size="level1" data-observable="true">
        Checkbox
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

export default CheckboxExample;
