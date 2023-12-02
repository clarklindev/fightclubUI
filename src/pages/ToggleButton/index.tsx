import reactElementToJSXString from 'react-element-to-jsx-string';

import { Icon, ToggleButton, Heading, Tabs, CodeBlock, Text } from '@swagfinger/components';
import { HeartIcon } from '@swagfinger/icons';

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

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" size="level1" data-observable="true">
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
            <CodeBlock>{previewString}</CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>

      <Text>
        Technically, a toggle is a behavior not a component, you are describing an action, the visual result is because
        of the state change and the driver behind a toggle is a useToggleHook. This way, the implementation is loosely
        tied to the visual representation of the state.
      </Text>

      <Text>
        A toggle usually has 2 states (depending on usage case), on/off; active/inactive etc and thats okay and for most
        situations, but lets open up to the idea where there is a possibility for more than 2 states (an arbitary amount
        of states) a toggle function should then have the ability to toggle all the states. This is possible with the
        use of an enum and combined with 'smart' coding, you can loop the different values of an enum. By isolating the
        amount of values in the enum, we can implement the basic toggle (and toggle more than 2 states if needed)
      </Text>
    </>
  );
};

export default ToggleButtonExample;
