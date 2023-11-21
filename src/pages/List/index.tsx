import reactElementToJSXString from 'react-element-to-jsx-string';

import { List, Heading, Text, Tabs, CodeBlock } from '@swagfinger/components';

const ListExample = () => {
  const DATA = [
    {
      id: 1,
      first_name: 'Tansy',
      last_name: 'Trynor',
      email: 'ttrynor0@cpanel.net',
    },
    {
      id: 2,
      first_name: 'Natasha',
      last_name: 'Charer',
      email: 'ncharer1@theatlantic.com',
    },
    {
      id: 3,
      first_name: 'Dareen',
      last_name: 'Martinson',
      email: 'dmartinson2@creativecommons.org',
    },
  ];

  interface CustomItem {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }

  //rename passed in props (incase of mismatch)
  const CustomItem = ({ first_name: firstName, last_name: lastName, email }: CustomItem) => {
    return (
      <div className="flex flex-col mb-5 last:mb-0">
        <div className="flex justify-between">
          {firstName} {lastName}
        </div>
        <div>{email}</div>
      </div>
    );
  };

  const preview = (
    <List>
      {DATA.map((item, index) => {
        return (
          <List.ListItem key={index} className="pb-5">
            <CustomItem {...item} />
          </List.ListItem>
        );
      })}
    </List>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        List
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
        Notice how the list item CustomItem is external to the list and is passed into "List.ListItem" as a child. This
        allows a more dynamic approach where the list item can be anything. You can ofcourse make CustomItem into a
        specific usecase component but remember that it is not directly associated with List.
      </Text>
    </>
  );
};

export default ListExample;
