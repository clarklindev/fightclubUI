import { useEffect, useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { List, ListItem, Heading, ResizePanel, Tabs, CodeBlock } from '@swagfinger/components';

type ExampleData = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

const ListExample = () => {
  const [data, setData] = useState<ExampleData[] | null>();

  useEffect(() => {
    const DATA: Array<ExampleData> = [
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
    setData(DATA);
  }, []);

  const preview = (
    <ResizePanel>
      {data && (
        <List>
          {data.map(({ id, first_name, last_name, email }, index) => {
            return (
              <ListItem
                key={id}
                data={{
                  index,
                  firstname: first_name,
                  lastname: last_name,
                  email,
                }}
              />
            );
          })}
        </List>
      )}
    </ResizePanel>
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
    </>
  );
};

export default ListExample;
