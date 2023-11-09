import reactElementToJSXString from 'react-element-to-jsx-string';

import { Icon, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import { ShoppingCartIcon } from '@swagfinger/icons';

const IconExample = () => {
  const preview = (
    <>
      <Icon size="20px">
        <ShoppingCartIcon />
      </Icon>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  const tabsData = [
    { label: 'preview', content: preview },
    {
      label: 'code',
      content: (
        <CodeBlock type="tsx">
          {`
import {Icon} from '@swagfinger/components';

${previewString}
`}
        </CodeBlock>
      ),
    },
  ];

  return (
    <>
      <Heading variation="h4">Icon</Heading>

      <Tabs>
        <Tabs.TabWrapper data={tabsData}>
          <Tabs.TabHeaders />
          <Tabs.TabContent />
        </Tabs.TabWrapper>
      </Tabs>
    </>
  );
};

export default IconExample;
