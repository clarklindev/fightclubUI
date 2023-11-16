import React from 'react';
import { Heading, Layout, Divider, Text, Tabs, CodeBlock } from '@swagfinger/components';
import { useState, useEffect } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import JsxParser from 'react-jsx-parser';

const DividerExample = () => {
  const preview = (
    <>
      <Layout variation="block">
        <Heading variation="h5">Divider (horizontal)</Heading>
        hello
        <Divider variation="horizontal" />
        world
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider labelled (horizontal)</Heading>
        hello
        <Divider variation="horizontal">OR</Divider>
        world
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider (vertical)</Heading>
        <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.1)` }} className="flex">
          hello
          <Divider variation="vertical" />
          world
        </div>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider labelled (vertical)</Heading>
        <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.1)` }} className="flex">
          hello <Divider variation="vertical">OR</Divider>
          world
        </div>
      </Layout>
      <Layout variation="block">
        <Heading variation="h5">Divider inline (inline-vertical)</Heading>
        <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.1)` }} className="flex">
          <Text>
            hello
            <Divider variation="inline-vertical" />
            world
          </Text>
        </div>
      </Layout>
    </>
  );

  const [val, setVal] = useState('');

  useEffect(() => {
    // Render the JSX element to a string
    const jsxString = reactElementToJSXString(preview);
    setVal(jsxString);
  }, []);

  const jsxParserProps = {
    bindings: {},
    components: { Heading, Layout, Divider, Text },
    jsx: val,
  };

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Divider
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">
            <JsxParser {...jsxParserProps} />
          </Tabs.Content>
          <Tabs.Content data-tab="1">{val && <CodeBlock value={val} onChange={setVal} />}</Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};
export default DividerExample;
