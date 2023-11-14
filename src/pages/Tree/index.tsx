//new
import { Tree, Heading, Tabs, CodeBlock } from '@swagfinger/components';
import reactElementToJSXString from 'react-element-to-jsx-string';

// only endnodes can be links
const TreeExample = () => {
  const data = [
    {
      label: 'Design System',
      children: [
        { label: 'Routing', path: '/routing' },
        { label: 'Themes', path: '/themes' },
        { label: 'Styling', path: '/styling' },
        { label: 'Layout', path: '/layout' },
      ],
    },
    {
      label: 'Form Inputs',
      children: [
        { label: 'RadioButton', path: '/radiobutton' },
        { label: 'RadioButton Group', path: '/radiobuttongroup' },
        { label: 'Checkbox', path: '/checkbox' },
        { label: 'Checkbox Group', path: '/checkboxgroup' },
        { label: 'Toggle Button', path: '/togglebutton' },
        { label: 'Toggle Switch', path: '/toggleswitch' },
        { label: 'Input', path: '/input' },
        { label: 'Counter', path: '/counter' },
        { label: 'Select', path: '/select' },
        { label: 'Slider', path: '/slider' },
        { label: 'Slider (Multirange)', path: '/slidermultirange' },
        { label: 'Text', path: '/text' },
      ],
    },
    {
      label: 'Elements',
      children: [
        { label: 'Button', path: '/button' },
        { label: 'Icon', path: '/icon' },
        { label: 'Heading', path: '/heading' },
        { label: 'LabelSomething', path: '/labelsomething' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Snackbar', path: '/snackbar' },
        { label: 'List', path: '/list' },
        { label: 'Table', path: '/table' },
        { label: 'Divider', path: '/divider' },
        { label: 'Card', path: '/card' },
        { label: 'Tree', path: '/tree' },
      ],
    },
  ];

  const preview = <Tree data={data} />;
  const previewString = reactElementToJSXString(preview);

  // requires data to be structured with "label" and "children" properties
  return (
    <>
      <Heading variation="h1" data-observable="true">
        Tree
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

export default TreeExample;
