import { Icon, ToggleButton, Heading, Tabs, CodeBlock, Text } from '@/components';
import { HeartIcon } from '@/icons';

import Code from './code.mdx';

const ToggleButtonExample = () => {
  //the context provider (can technically wrap inside the component itself)
  enum ToggleEnumWithMaybe {
    ON = 'true',
    OFF = 'false',
    MAYBE = 'maybe',
  }

  const preview = (
    <ToggleButton
      enumObj={ToggleEnumWithMaybe}
      render={current => {
        switch (current) {
          case 'ON':
            return (
              <Icon size="L">
                <HeartIcon />
              </Icon>
            );

          case 'OFF':
            return <Icon size="L">OFF</Icon>;

          default:
          case 'MAYBE':
            return <Icon size="L">'maybe'</Icon>;
        }
      }}
    />
  );

  return (
    <>
      <Heading as="h1" data-observable="true">
        Toggle Button
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

export default ToggleButtonExample;
