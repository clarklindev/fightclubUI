import reactElementToJSXString from 'react-element-to-jsx-string';

import { Icon, Heading, Tabs, CodeBlock, Svg } from '@swagfinger/components';
import { ShoppingCartIcon } from '@swagfinger/icons';

const IconExample = () => {
  const preview = (
    <Icon size="XXXL">
      <Svg className="w-full h-full">
        <ShoppingCartIcon />
      </Svg>
    </Icon>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Icon
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
              {`
import {Icon} from '@swagfinger/components';

${previewString}
`}
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default IconExample;
