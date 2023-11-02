import reactElementToJSXString from 'react-element-to-jsx-string';
import { Heading, CodeBlock, Tabs } from '@swagfinger/components';

const HeadingExample = () => {
  const preview = (
    <>
      <Heading variation="h1">H1 heading</Heading>

      <Heading variation="h2">H2 heading</Heading>

      <Heading variation="h3">H3 heading</Heading>

      <Heading variation="h4">H4 heading</Heading>

      <Heading variation="h5">H5 heading</Heading>

      <Heading variation="h6">H6 heading</Heading>
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
import {Heading} from '@swagfinger/components';

${previewString}
`}
        </CodeBlock>
      ),
    },
  ];

  return (
    <>
      <Heading variation="h4">Headings</Heading>

      <Tabs>
        <Tabs.TabWrapper data={tabsData}>
          <Tabs.TabHeaders />
          <Tabs.TabContent />
        </Tabs.TabWrapper>
      </Tabs>
    </>
  );
};
export default HeadingExample;
